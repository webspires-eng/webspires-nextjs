import { sanitizeHtml } from '@/lib/blog';

export default function BlogContent({ html }) {
    return (
        <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(html || '') }}
        />
    );
}
