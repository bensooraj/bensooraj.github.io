import { MDXProvider } from '@mdx-js/react'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronRight } from "lucide-react"

export const Route = createFileRoute('/blog/$id')({
  loader: async ({ params }) => {
    const module = await import(`@/mdxdocs/blogs/${params.id}/index.mdx`)
    return module.default
  },
  component: BlogPost,
})

function BlogPost() {
  const Post = Route.useLoaderData<React.ComponentType>()
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
          <h3 className="mb-4 text-lg font-semibold">Contents</h3>
          <ul className="space-y-4">
            <li>
              <a href="#section-1">Section 1</a>
            </li>
            <li>
              <a href="#section-2">Section 2</a>
            </li>
            <li>
              <a href="#section-3">Section 3</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
