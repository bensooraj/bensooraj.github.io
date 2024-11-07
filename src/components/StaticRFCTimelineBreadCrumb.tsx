import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Badge } from '@/components/ui/badge'
// import { Home } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function StaticRFCTimelineBreadCrumb({ breadcrumbPage }: { breadcrumbPage: string }) {
    return (
        <Breadcrumb className="mb-6">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/identity/rfc-notes">
                            <Badge variant='default'>
                                RFC Timeline
                            </Badge>
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        <Badge variant='secondary'>
                            {breadcrumbPage}
                        </Badge>
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
