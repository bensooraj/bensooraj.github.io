import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from '@tanstack/react-router'
import { Box, Calendar, NotepadText, Pencil, User } from 'lucide-react'

interface TimelineItem {
    icon: "box"
    title: string
    date: string
    description: string
    isRead: boolean
    rfcNumber: string
    rfcUrl: string,
    notesUrl?: string
    authors: string
}

const timelineItems: TimelineItem[] = [
    {
        icon: "box",
        title: "The OAuth 1.0 Protocol",
        date: "April 2010",
        description: "OAuth provides a method for clients to access server resources on behalf of a resource owner (such as a different client or an end-user). It also provides a process for end-users to authorize third-party access to their server resources without sharing their credentials (typically, a username and password pair), using user-agent redirections. This document is not an Internet Standards Track specification; it is published for informational purposes.",
        rfcNumber: 'RFC 5849',
        rfcUrl: "https://www.rfc-editor.org/info/rfc5849",
        authors: "Eran Hammer-Lahav",
        isRead: false,
    },
    {
        icon: "box",
        title: "The OAuth 2.0 Authorization Framework",
        date: "October 2012",
        isRead: true,
        description: "The OAuth 2.0 authorization framework enables a third-party application to obtain limited access to an HTTP service, either on behalf of a resource owner by orchestrating an approval interaction between the resource owner and the HTTP service, or by allowing the third-party application to obtain access on its own behalf. This specification replaces and obsoletes the OAuth 1.0 protocol described in RFC 5849.",
        rfcNumber: 'RFC 6749',
        rfcUrl: "https://www.rfc-editor.org/info/rfc6749",
        notesUrl: "https://www.rfc-editor.org/info/rfc5849",
        authors: "Dick Hardt",
    },
]

const iconMap = {
    calendar: Calendar,
    box: Box,
}

export default function RFCTimeline() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold">RFC Timeline</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                    {timelineItems.map((item, index) => {
                        const Icon = iconMap[item.icon]
                        return (
                            <div key={index} className="relative flex items-start">
                                <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="space-y-3 ml-14">
                                    <div className="flex items-center space-x-2">
                                        <h3 className="text-lg font-semibold">
                                            {item.title} {/* {item.version} */}
                                        </h3>
                                        {item.isRead ? (
                                            <Badge variant="default" className="text-green-800 bg-green-100 rounded-full hover:bg-green-100 hover:text-green-800">
                                                Read
                                            </Badge>
                                        ) : (
                                            <Badge variant="secondary" className="text-red-800 bg-red-100 rounded-full hover:bg-red-100 hover:text-red-800">
                                                Not Read
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <User className="w-4 h-4" />
                                        <span>{item.authors}</span>
                                    </div>
                                    <p className="text-muted-foreground">
                                        {item.description}
                                    </p>
                                    {item.rfcUrl && (
                                        <Button variant="outline" className="mt-2 mr-5" asChild>
                                            <Link to={item.rfcUrl} target='_blank'>
                                                <NotepadText className="w-4 h-4 mr-1" />
                                                <span>{item.rfcNumber}</span>
                                            </Link>
                                        </Button>
                                    )}
                                    {item.notesUrl && (
                                        <Button variant="outline" className="mt-2" asChild>
                                            <Link to={item.notesUrl} target='_blank'>
                                                <Pencil className="w-4 h-4 mr-1" />
                                                <span>Notes</span>
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}