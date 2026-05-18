export function formatDate(value) {
    if (!value) return '';
    try {
        return new Date(value).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    } catch {
        return '';
    }
}
