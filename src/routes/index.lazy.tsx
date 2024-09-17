import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Calendar } from "lucide-react"
import { SiX, SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons'

export const Route = createLazyFileRoute('/')({
  component: HomePage
})

function HomePage() {
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
