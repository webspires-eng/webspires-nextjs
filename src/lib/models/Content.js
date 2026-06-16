import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * A single flexible collection that backs every editable dataset
 * (services, industries, locations, case-study categories, Google Ads
 * child services, home FAQs). The shape of `data` differs per `type`
 * and is described by the field-schema descriptors in
 * `src/lib/contentSchemas.js`. `minimize: false` keeps empty arrays /
 * objects so optional sections behave predictably.
 */
const ContentSchema = new Schema(
    {
        type: { type: String, required: true, index: true, trim: true },
        slug: { type: String, required: true, trim: true, lowercase: true },
        order: { type: Number, default: 0, index: true },
        data: { type: Schema.Types.Mixed, default: {} },
    },
    { timestamps: true, minimize: false }
);

// One slug per type. Prevents duplicate landing pages.
ContentSchema.index({ type: 1, slug: 1 }, { unique: true });
// Common ordered read.
ContentSchema.index({ type: 1, order: 1 });

export default mongoose.models.Content ||
    mongoose.model('Content', ContentSchema);
