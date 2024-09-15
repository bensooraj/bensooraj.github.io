import { MDXProvider } from '@mdx-js/react'
import { createFileRoute } from '@tanstack/react-router'
import TocComponent from '@/components/TocComponent'
import { TocItem } from "@/types/toc-item"

interface BlogPostData {
  Post: React.ComponentType
  ToC: TocItem[]
}

export const Route = createFileRoute('/blog/$id')({
  loader: async ({ params }) => {
    const module = await import(`@/mdxdocs/blogs/${params.id}/index.mdx`)
    const toc = await import(`@/mdxdocs/blogs/${params.id}/toc.json`);
    return {
      Post: module.default,
      ToC: toc.default,
    };
  },
  component: BlogPost,
})

function BlogPost() {
  const { Post, ToC } = Route.useLoaderData<BlogPostData>()
  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="space-y-8 lg:col-span-3">
          <article className="py-4 pl-4 m-4 prose max-w-none dark:prose-invert">
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
