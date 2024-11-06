import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from '@tanstack/react-router'
import { Box, Calendar, Download } from 'lucide-react'

interface TimelineItem {
    icon: "box" | "calendar" | "download"
    title: string
    version: string
    date: string
    description: string
    isLatest?: boolean
    downloadUrl?: string
}

const timelineItems: TimelineItem[] = [
    {
        icon: "download",
        title: "Flowbite Application UI",
        version: "v2.0.0",
        date: "Released on January 13th, 2022",
        description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        isLatest: true,
        downloadUrl: "#"
    },
    {
        icon: "calendar",
        title: "Flowbite Figma",
        version: "v1.3.0",
        date: "Released on December 7th, 2021",
        description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    },
    {
        icon: "box",
        title: "Flowbite Library",
        version: "v1.2.2",
        date: "Released on December 2nd, 2021",
        description: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
    }
]

const iconMap = {
    box: Box,
    calendar: Calendar,
    download: Download
}

export default function RFCTimeline() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Release Timeline</CardTitle>
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
                                            {item.title} {item.version}
                                        </h3>
                                        {item.isLatest && (
                                            <Badge variant="secondary" className="rounded-full">
                                                Latest
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {item.date}
                                    </div>
                                    <p className="text-muted-foreground">
                                        {item.description}
                                    </p>
                                    {item.downloadUrl && (
                                        <Button variant="outline" className="mt-2" asChild>
                                            <Link to={item.downloadUrl}>
                                                <Download className="w-4 h-4 mr-2" />
                                                Download ZIP
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