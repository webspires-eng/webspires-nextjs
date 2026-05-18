import 'server-only';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

/**
 * Cloudflare R2 is S3-compatible, so we use the AWS S3 client
 * pointed at the R2 endpoint. Env is read lazily so a missing
 * value never breaks `next build` (only fails at upload time).
 */

let cachedClient = null;

function getConfig() {
    const accountId = process.env.R2_ACCOUNT_ID;
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    const bucket = process.env.R2_BUCKET;
    const publicUrl = (process.env.R2_PUBLIC_URL || '').replace(/\/$/, '');

    const missing = [];
    if (!accountId) missing.push('R2_ACCOUNT_ID');
    if (!accessKeyId) missing.push('R2_ACCESS_KEY_ID');
    if (!secretAccessKey) missing.push('R2_SECRET_ACCESS_KEY');
    if (!bucket) missing.push('R2_BUCKET');
    if (!publicUrl) missing.push('R2_PUBLIC_URL');

    return {
        accountId,
        accessKeyId,
        secretAccessKey,
        bucket,
        publicUrl,
        missing,
    };
}

function getClient(cfg) {
    if (cachedClient) return cachedClient;
    cachedClient = new S3Client({
        region: 'auto',
        endpoint: `https://${cfg.accountId}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: cfg.accessKeyId,
            secretAccessKey: cfg.secretAccessKey,
        },
    });
    return cachedClient;
}

/**
 * Uploads a file buffer to R2 and returns its public URL.
 * @returns {Promise<string>} public URL of the uploaded object
 */
export async function uploadToR2({ buffer, key, contentType }) {
    const cfg = getConfig();
    if (cfg.missing.length) {
        throw new Error(
            `Cloudflare R2 is not configured. Missing env: ${cfg.missing.join(
                ', '
            )}`
        );
    }

    const client = getClient(cfg);
    await client.send(
        new PutObjectCommand({
            Bucket: cfg.bucket,
            Key: key,
            Body: buffer,
            ContentType: contentType,
            CacheControl: 'public, max-age=31536000, immutable',
        })
    );

    return `${cfg.publicUrl}/${key}`;
}
