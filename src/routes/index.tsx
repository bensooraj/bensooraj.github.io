import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Calendar } from "lucide-react"
import { SiX, SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/')({
  loader: async () => {
    const postsPerTag = (await import(`@/mdxdocs/blogs/postsPerTag.json`)).default as [string, number][]
    return postsPerTag || []
  },
  component: HomePage
})

function HomePage() {
  const postsPerTag = Route.useLoaderData<[string, number][]>()
  return (
    <>
      <main className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-8 md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>New features</CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>24th March 2024</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>More new features specific to this theme.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read more</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pictures display</CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>21st March 2024</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Showcase your favorite images in more ways than one!</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read more</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A brief description about yourself and your blog.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {postsPerTag.map(([tag, count]) => (
                    <Badge>
                      <Link className="hover:font-bold" to="/blog/tags/$id" params={{ id: tag }}>
                        {tag} <span>({count})</span>
                      </Link>
                    </Badge>
                  ))}

                </div>

              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a href="https://x.com/bensooraj" target="_blank" rel="noopener noreferrer">
                    <SiX className="w-6 h-6" color='default' size={24} />
                  </a>
                  <a href="https://github.com/bensooraj" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="w-6 h-6" color='default' size={24} />
                  </a>
                  <a href="https://in.linkedin.com/in/bensoorajm" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
