'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FileText,
    PlusCircle,
    Database,
    ExternalLink,
    LogOut,
} from 'lucide-react';
import { logoutAction } from '@/app/actions/auth';

const links = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
    { href: '/admin/posts', label: 'All Posts', icon: FileText },
    { href: '/admin/posts/new', label: 'New Post', icon: PlusCircle },
    { href: '/admin/content', label: 'Site Content', icon: Database },
];

export default function Sidebar({ username }) {
    const pathname = usePathname();

    const isActive = (href, exact) =>
        exact ? pathname === href : pathname.startsWith(href);

    return (
        <aside className="flex w-60 shrink-0 flex-col bg-slate-900 text-slate-300">
            <div className="px-6 py-6">
                <p className="text-lg font-extrabold text-white">Webspires</p>
                <p className="text-xs text-slate-400">Blog Admin</p>
            </div>

            <nav className="flex-1 px-3">
                <ul className="space-y-1">
                    {links.map(({ href, label, icon: Icon, exact }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                    isActive(href, exact)
                                        ? 'bg-primary text-white'
                                        : 'hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                <Icon size={18} aria-hidden="true" />
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="pt-2">
                        <a
                            href="/blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-slate-800 hover:text-white"
                        >
                            <ExternalLink size={18} aria-hidden="true" />
                            View Blog
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="border-t border-slate-800 px-3 py-4">
                <p className="px-3 pb-2 text-xs text-slate-500">
                    Signed in as{' '}
                    <span className="font-semibold text-slate-300">
                        {username}
                    </span>
                </p>
                <form action={logoutAction}>
                    <button
                        type="submit"
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-red-500/10 hover:text-red-400"
                    >
                        <LogOut size={18} aria-hidden="true" />
                        Sign out
                    </button>
                </form>
            </div>
        </aside>
    );
}
