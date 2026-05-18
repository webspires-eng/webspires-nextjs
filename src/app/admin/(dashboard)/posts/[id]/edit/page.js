import { notFound } from 'next/navigation';
import PostForm from '@/components/admin/PostForm';
import { getPostByIdAdmin } from '@/lib/blog';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }) {
    const { id } = await params;
    const post = await getPostByIdAdmin(id);
    if (!post) notFound();

    return <PostForm post={post} />;
}
