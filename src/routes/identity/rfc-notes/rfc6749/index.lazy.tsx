import { createLazyFileRoute } from '@tanstack/react-router'
import { MDXProvider } from '@mdx-js/react'
import { StaticRFCTimelineBreadCrumb } from '@/components/StaticRFCTimelineBreadCrumb'

const module = await import(`@/mdxdocs/identity-rfc-notes/rfc6749/index.mdx`)

export const Route = createLazyFileRoute('/identity/rfc-notes/rfc6749/')({
  component: RFC6749Notes
})

function RFC6749Notes() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="space-y-8 lg:col-span-3">
            <div className='pl-4 mx-4 mt-4'>
              <StaticRFCTimelineBreadCrumb breadcrumbPage='The OAuth 2.0 Authorization Framework' />
            </div>
          <article className="pl-4 ml-4 prose max-w-none dark:prose-invert">
            <h1 className="mb-4 text-4xl font-bold">The OAuth 2.0 Authorization Framework</h1>
            <MDXProvider>
              <module.default />
            </MDXProvider>
          </article>
        </div>
      </div>
    </>
  )
}