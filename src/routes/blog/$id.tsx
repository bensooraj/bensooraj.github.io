import { MDXProvider } from '@mdx-js/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import TocComponent from '@/components/TocComponent'
import { TocItem } from "@/types/toc-item"
import { Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  BlogPostMetadata,
} from "@/types/blogs"

interface BlogPostData {
  Post: React.ComponentType
  ToC: TocItem[]
  Metadata: BlogPostMetadata
}

export const Route = createFileRoute('/blog/$id')({
  loader: async ({ params }) => {
    const module = await import(`@/mdxdocs/blogs/${params.id}/index.mdx`)
    const toc = await import(`@/mdxdocs/blogs/${params.id}/toc.json`);
    const metadata = await import(`@/mdxdocs/blogs/${params.id}/metadata.json`);
    return {
      Post: module.default,
      ToC: toc.default,
      Metadata: metadata.default,
    };
  },
  component: BlogPost,
})

function BlogPost() {
  const { Post, ToC, Metadata } = Route.useLoaderData<BlogPostData>()

  const publishedDate = new Date(Metadata.date)
  const publishedDateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="space-y-8 lg:col-span-3">
          <article className="py-4 pl-4 m-4 prose max-w-none dark:prose-invert">
            <h1 className="mb-4 text-4xl font-bold">{Metadata.title}</h1>
            <div className="flex items-center mb-4 space-x-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{publishedDate.toLocaleDateString(undefined, publishedDateOptions)}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {Metadata.tags.map((tag) => (
                <Link key={tag} to="/blog/tags/$id" params={{ id: tag }}>
                  <Badge>{tag}</Badge>
                </Link>
              ))}
            </div>
            <MDXProvider>
              <Post></Post>
            </MDXProvider>
          </article>
        </div>
        <div className="space-y-8 border lg:sticky lg:top-4 lg:self-start">
          <TocComponent toc={ToC} />
        </div>
      </div>
    </>
  )
}
