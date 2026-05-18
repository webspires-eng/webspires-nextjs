import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

/*
 * Optimistic auth guard for the admin area.
 *
 * IMPORTANT: This is only a UX optimisation (fast redirect). Real
 * authorization is enforced server-side in the Data Access Layer
 * (src/lib/auth.js) inside every admin page, Server Action and
 * Route Handler — never rely on Proxy alone.
 */

const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET || '');

async function isValidSession(token) {
    if (!token) return false;
    try {
        const { payload } = await jwtVerify(token, encodedKey, {
            algorithms: ['HS256'],
        });
        return payload?.role === 'admin';
    } catch {
        return false;
    }
}

export async function proxy(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('admin_session')?.value;
    const authed = await isValidSession(token);

    const isLoginPage = pathname === '/admin/login';

    // Signed-in admin shouldn't see the login page.
    if (isLoginPage && authed) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    // Unauthenticated users can't see protected admin pages.
    if (!isLoginPage && !authed) {
        const loginUrl = new URL('/admin/login', request.url);
        loginUrl.searchParams.set('from', pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
