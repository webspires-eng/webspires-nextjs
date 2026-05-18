import { requireAdmin } from '@/lib/auth';
import Sidebar from '@/components/admin/Sidebar';

export default async function DashboardLayout({ children }) {
    const admin = await requireAdmin();

    return (
        <div className="flex min-h-screen">
            <Sidebar username={admin.username} />
            <div className="flex-1 overflow-x-hidden">
                <div className="mx-auto max-w-5xl px-6 py-8">{children}</div>
            </div>
        </div>
    );
}
