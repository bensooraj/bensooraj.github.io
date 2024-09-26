import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Card, CardContent,
  // CardDescription, 
  CardHeader, CardTitle
} from "@/components/ui/card"
// import { Button } from '@/components/ui/button'
import {
  // Calendar,
  LucideNotepadText
} from "lucide-react"
import { SiX, SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Badge } from '@/components/ui/badge'
import MDImage from '@/components/MDImage';

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
            {/* <Card>
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
            </Card> */}
            <Card>
              {/* Software Engineering */}
              <CardHeader>
                <CardTitle>My thoughts on</CardTitle>
              </CardHeader>
              <CardContent>
                <p>software engineering (a funny take)</p>
                <MDImage src="/home/dilbert-scott-adams.webp" alt="dilbert by Scott Adams" />
              </CardContent>
              {/* Life */}
              <CardContent>
                <p>life... and</p>
                <MDImage src="/home/calvin-and-hobbes-6-1.png" alt="Calvin and Hobbes | Photo Credit - Bill Watterson and Universal Press Syndicate" />
              </CardContent>
              {/* Everythin in between */}
              <CardContent>
                <p>everythin in between</p>
                <MDImage src="/home/calvin-and-hobbes-6-1.png" alt="Calvin and Hobbes | Photo Credit - Bill Watterson and Universal Press Syndicate" />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className='flex gap-2'><LucideNotepadText className='w-4 h-4' /> About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Hi! I'm Ben, a software engineer, a husband, a father, and a voracious learner.</p>
                <br />
                <p>You'll find me jotting down my notes on what I am currently learning and working on.</p>
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
