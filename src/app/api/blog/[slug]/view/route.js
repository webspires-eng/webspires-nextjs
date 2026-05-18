import { NextResponse } from 'next/server';
import { incrementViews } from '@/lib/blog';

export const runtime = 'nodejs';

export async function POST(_request, { params }) {
    const { slug } = await params;
    if (!slug) {
        return NextResponse.json({ ok: false }, { status: 400 });
    }
    try {
        await incrementViews(slug);
    } catch {
        // View counting is best-effort; never fail the request.
    }
    return NextResponse.json({ ok: true });
}
