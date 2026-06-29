import { NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { getAdminOrNull } from '@/lib/auth';

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

// Where uploads are written and the public path they're served from.
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
const PUBLIC_PREFIX = '/uploads';

/*
 * Stores blog media on the local filesystem under public/uploads,
 * served directly by Next.js. No third-party object storage.
 *
 * Note: on ephemeral/serverless hosts (e.g. Vercel) the filesystem is
 * not persistent across deploys/instances — this is intended for hosts
 * with a persistent disk.
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
    const filename = `${Date.now()}-${crypto
        .randomBytes(6)
        .toString('hex')}.${ext}`;

    try {
        await mkdir(UPLOAD_DIR, { recursive: true });
        await writeFile(path.join(UPLOAD_DIR, filename), buffer);
        return NextResponse.json({ url: `${PUBLIC_PREFIX}/${filename}` });
    } catch (err) {
        return NextResponse.json(
            { error: `Upload failed: ${err.message}` },
            { status: 500 }
        );
    }
}
