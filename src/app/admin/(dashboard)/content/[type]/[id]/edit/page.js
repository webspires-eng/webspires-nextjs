import { notFound } from 'next/navigation';
import { CONTENT_TYPES } from '@/lib/contentSchemas';
import { getContentItemById } from '@/lib/content';
import ContentForm from '@/components/admin/ContentForm';

export const dynamic = 'force-dynamic';

export default async function EditContentItemPage({ params }) {
    const { type, id } = await params;
    if (!CONTENT_TYPES[type]) notFound();

    const item = await getContentItemById(id);
    if (!item || item.type !== type) notFound();

    return <ContentForm type={type} item={item} />;
}
