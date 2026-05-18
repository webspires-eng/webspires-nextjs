import Image from 'next/image';

/**
 * Renders a cover image. Local uploads (paths starting with "/")
 * go through next/image for optimisation; arbitrary external URLs
 * fall back to a lazy <img> so an unconfigured host can't break
 * the build or runtime.
 */
export default function Cover({
    src,
    alt = '',
    sizes = '100vw',
    priority = false,
    className = '',
}) {
    if (!src) {
        return (
            <div
                className={`flex items-center justify-center bg-slate-100 text-slate-300 ${className}`}
                aria-hidden="true"
            >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M4 16l4-4 4 4 4-6 4 6M4 6h16v12H4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        );
    }

    const isLocal = src.startsWith('/');

    if (isLocal) {
        return (
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                priority={priority}
                className={`object-cover ${className}`}
            />
        );
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover ${className}`}
        />
    );
}
