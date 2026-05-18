import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
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

/*
 * NOTE: Uploads are written to /public/uploads on the local disk.
 * This works on a long-lived Node server. On serverless platforms
 * (e.g. Vercel) the filesystem is ephemeral and files will NOT
 * persist — switch to object storage (S3/R2/Cloudinary) for that.
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
    const name = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}.${ext}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    try {
        await mkdir(uploadDir, { recursive: true });
        await writeFile(path.join(uploadDir, name), buffer);
    } catch (err) {
        return NextResponse.json(
            { error: `Upload failed: ${err.message}` },
            { status: 500 }
        );
    }

    return NextResponse.json({ url: `/uploads/${name}` });
}
