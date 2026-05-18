export const metadata = {
  title: "Admin — Webspires",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminRootLayout({ children }) {
  return <div className="min-h-screen bg-slate-100 text-slate-900">{children}</div>;
}
