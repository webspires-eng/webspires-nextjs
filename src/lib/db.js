import 'server-only';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        'Missing MONGODB_URI environment variable. Add it to .env.local'
    );
}

/**
 * Cache the connection across hot reloads in dev and across
 * invocations in a serverless environment, so we never open
 * a new connection per request.
 */
let cached = global._mongoose;

if (!cached) {
    cached = global._mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                bufferCommands: false,
                maxPoolSize: 10,
                serverSelectionTimeoutMS: 10000,
            })
            .then((m) => m);
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null;
        throw err;
    }

    return cached.conn;
}
