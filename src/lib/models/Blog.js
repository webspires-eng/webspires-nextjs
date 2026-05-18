import mongoose from 'mongoose';

const { Schema } = mongoose;

const FaqSchema = new Schema(
    {
        question: { type: String, trim: true },
        answer: { type: String, trim: true },
    },
    { _id: false }
);

const SeoSchema = new Schema(
    {
        metaTitle: { type: String, trim: true, maxlength: 70 },
        metaDescription: { type: String, trim: true, maxlength: 200 },
        canonicalUrl: { type: String, trim: true },
        ogImage: { type: String, trim: true },
        keywords: { type: [String], default: [] },
        noIndex: { type: Boolean, default: false },
    },
    { _id: false }
);

const BlogSchema = new Schema(
    {
        title: { type: String, required: true, trim: true, maxlength: 180 },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        excerpt: { type: String, trim: true, maxlength: 320 },
        // Sanitised HTML produced by the rich text editor.
        content: { type: String, required: true },
        coverImage: { type: String, trim: true },
        coverImageAlt: { type: String, trim: true },
        category: { type: String, trim: true, default: 'General', index: true },
        tags: { type: [String], default: [], index: true },
        author: { type: String, trim: true, default: 'Webspires Team' },
        status: {
            type: String,
            enum: ['draft', 'published'],
            default: 'draft',
            index: true,
        },
        featured: { type: Boolean, default: false },
        readingTime: { type: Number, default: 1 },
        views: { type: Number, default: 0 },
        seo: { type: SeoSchema, default: () => ({}) },
        faqs: { type: [FaqSchema], default: [] },
        publishedAt: { type: Date },
    },
    { timestamps: true }
);

// Compound index for the common public query (published, newest first).
BlogSchema.index({ status: 1, publishedAt: -1 });

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
