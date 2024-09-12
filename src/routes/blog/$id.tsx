import { MDXProvider } from '@mdx-js/react'
import { createFileRoute } from '@tanstack/react-router'

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
      <div className='p-4 m-4 prose'>
        <MDXProvider>
          <Post></Post>
        </MDXProvider>
      </div>
    </>
  )
}
