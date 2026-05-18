import { NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { getAdminOrNull } from '@/lib/auth';
import { uploadToR2 } from '@/lib/r2';

export const runtime = 'nodejs';

const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif',
    'image/avif': 'avif',
    'image/svg+xml': 'svg',
};

/*
 * Stores blog media in Cloudflare R2 (S3-compatible object storage).
 * Works on serverless platforms (Vercel) where the local filesystem
 * is ephemeral.
 */
export async function POST(request) {
    const admin = await getAdminOrNull();
    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let formData;
    try {
        formData = await request.formData();
    } catch {
        return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const file = formData.get('file');
    if (!file || typeof file === 'string') {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const ext = ALLOWED[file.type];
    if (!ext) {
        return NextResponse.json(
            { error: 'Unsupported file type' },
            { status: 415 }
        );
    }

    const bytes = await file.arrayBuffer();
    if (bytes.byteLength > MAX_BYTES) {
        return NextResponse.json(
            { error: 'File too large (max 5 MB)' },
            { status: 413 }
        );
    }

    const buffer = Buffer.from(bytes);
    const key = `blog/${Date.now()}-${crypto
        .randomBytes(6)
        .toString('hex')}.${ext}`;

    try {
        const url = await uploadToR2({
            buffer,
            key,
            contentType: file.type,
        });
        return NextResponse.json({ url });
    } catch (err) {
        return NextResponse.json(
            { error: `Upload failed: ${err.message}` },
            { status: 500 }
        );
    }
}
