import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SESSION_COOKIE = 'admin_session';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days


let cachedEncodedKey = null;

function getEncodedKey() {
    if (cachedEncodedKey) return cachedEncodedKey;
    const secret = process.env.SESSION_SECRET;
    if (!secret) {
        throw new Error('Missing SESSION_SECRET environment variable.');
    }
    cachedEncodedKey = new TextEncoder().encode(secret);
    return cachedEncodedKey;
}

export async function encrypt(payload) {
    const encodedKey = getEncodedKey();
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey);
}

export async function decrypt(token) {
    if (!token) return null;
    try {
        const encodedKey = getEncodedKey();
        const { payload } = await jwtVerify(token, encodedKey, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch {
        return null;
    }
}

export async function createSession(username) {
    const expiresAt = new Date(Date.now() + MAX_AGE_SECONDS * 1000);
    const token = await encrypt({ username, role: 'admin', expiresAt });
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: expiresAt,
        path: '/',
    });
}

export async function getSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    return decrypt(token);
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE);
}

export { SESSION_COOKIE };
