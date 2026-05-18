import LoginForm from '@/components/admin/LoginForm';

export const metadata = {
    title: 'Sign in — Webspires Admin',
    robots: { index: false, follow: false },
};

export default async function LoginPage({ searchParams }) {
    const sp = await searchParams;
    const from = typeof sp?.from === 'string' ? sp.from : '/admin';

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-sm">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-extrabold text-slate-900">
                        Webspires Admin
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Sign in to manage the blog
                    </p>
                </div>
                <div className="rounded-2xl bg-white p-7 shadow-xl shadow-slate-200/60">
                    <LoginForm from={from} />
                </div>
                <p className="mt-6 text-center text-xs text-slate-400">
                    Protected area · Webspires Limited
                </p>
            </div>
        </div>
    );
}
