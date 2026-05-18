'use client';

import { useActionState } from 'react';
import { loginAction } from '@/app/actions/auth';

export default function LoginForm({ from = '/admin' }) {
    const [state, action, pending] = useActionState(loginAction, null);

    return (
        <form action={action} className="space-y-5">
            <input type="hidden" name="from" value={from} />

            <div>
                <label
                    htmlFor="username"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                    Username
                </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="admin"
                />
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="••••••••"
                />
            </div>

            {state?.error && (
                <p
                    role="alert"
                    className="rounded-lg bg-red-50 border border-red-200 px-3.5 py-2.5 text-sm text-red-700"
                >
                    {state.error}
                </p>
            )}

            <button
                type="submit"
                disabled={pending}
                className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
                {pending ? 'Signing in…' : 'Sign in'}
            </button>
        </form>
    );
}
