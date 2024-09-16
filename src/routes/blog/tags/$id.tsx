import { createFileRoute, Link } from '@tanstack/react-router'
import { BlogPostMetadata } from '@/types/blogs'
import { Calendar } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/blog/tags/$id')({
    loader: async ({ params }) => {
        const postsByTag = (await import(`@/mdxdocs/blogs/postsByTag.json`)).default as [string, BlogPostMetadata[]][]
        const tag: string = params.id

        const posts: BlogPostMetadata[] = []

        postsByTag.forEach((pbt) => {
            if (pbt[0] === tag) {
                console.log(tag, pbt[1])
                if (pbt[1].length > 0) posts.push(...pbt[1]);
            }
        })
        return posts || []
    },
    component: BlogPostsByTag,
})

function getDateString(date: Date): string {
    const publishedDate = new Date(date)
    const publishedDateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    }
    return publishedDate.toLocaleDateString(undefined, publishedDateOptions)
}

function BlogPostsByTag() {
    const posts = Route.useLoaderData<BlogPostMetadata[]>()
    const tag = Route.useParams().id

    const sortedPosts = posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return (
        <>
        <main className="container px-4 py-6 mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="p-4 text-2xl font-bold">tag: <Badge className='text-lg'>{tag}</Badge></h2>
                {/*  */}
            </div>
            <div className="space-y-1">
                {sortedPosts.map((meta) => (
                    <div key={meta.slug} className="flex items-center transition-colors rounded-lg hover:bg-accent">
                        <div className="flex items-center w-40 p-4 text-sm text-muted-foreground whitespace-nowrap">
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