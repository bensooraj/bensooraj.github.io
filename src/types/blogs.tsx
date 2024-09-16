import * as z from "zod";


export const BlogPostMetadataSchema = z.object({
    "slug": z.string(),
    "title": z.string(),
    "date": z.coerce.date(),
    "draft": z.boolean(),
    "tags": z.array(z.string()),
});
export type BlogPostMetadata = z.infer<typeof BlogPostMetadataSchema>;
