import { notFound } from 'next/navigation';
import { CONTENT_TYPES } from '@/lib/contentSchemas';
import ContentForm from '@/components/admin/ContentForm';

export const dynamic = 'force-dynamic';

export default async function NewContentItemPage({ params }) {
    const { type } = await params;
    if (!CONTENT_TYPES[type]) notFound();

    return <ContentForm type={type} />;
}
