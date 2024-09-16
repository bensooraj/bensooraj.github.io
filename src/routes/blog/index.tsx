import { createFileRoute, Link } from '@tanstack/react-router'
import {
    BlogPostMetadata,
} from "@/types/blogs"
import { Calendar } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute('/blog/')({
    loader: async () => {
        // VITE specific code
        const metaModules = import.meta.glob<{ default: BlogPostMetadata }>(`@/mdxdocs/blogs/*/metadata.json`, { eager: true });
        // const metaModules = await import.meta.glob(`@/mdxdocs/blogs/*/metadata.json`, {eager: true});
        const metadata: BlogPostMetadata[] = [];
        for (const path in metaModules) {
            const meta = await metaModules[path]
            metadata.push(meta.default);
        }
        return metadata;
    },
    component: BlogPosts
})

function getDateString(date: Date): string {
    const publishedDate = new Date(date)
    const publishedDateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return publishedDate.toLocaleDateString(undefined, publishedDateOptions)
}

function BlogPosts() {
    const metadata = Route.useLoaderData<BlogPostMetadata[]>();
    return (
        <>
            <main className="container px-4 py-6 mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Posts</h2>
                    {/*  */}
                </div>
                <div className="space-y-1">
                    {metadata.map((meta) => (
                        <div key={meta.slug} className="flex items-center transition-colors rounded-lg hover:bg-accent">
                            <div className="flex items-center w-48 p-4 text-sm text-muted-foreground whitespace-nowrap">
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>{getDateString(meta.date)}</span>
                            </div>
                            <Separator orientation="vertical" className="h-12" />
                            <div className="flex-grow p-4">
                                <Link to="/blog/$id" params={
                                    { id: meta.slug }
                                } className="text-lg font-medium hover:underline">
                                    {meta.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}