import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Calendar, Rss } from "lucide-react"
import { SiX, SiGithub } from '@icons-pack/react-simple-icons'

export const Route = createLazyFileRoute('/')({
  component: HomePage
})

function HomePage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>New features</CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
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
                    <Calendar className="h-4 w-4" />
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
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link className="hover:underline" to="/">Tech (5)</Link>
                  </li>
                  <li>
                    <Link className="hover:underline" to="/">Thoughts (3)</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Link to="/">
                    <SiX className="h-6 w-6" color='default' size={24} />
                  </Link>
                  <Link to="/">
                    <SiGithub className="h-6 w-6" color='default' size={24} />
                  </Link>
                  <Link to="/">
                    <Rss className="h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
