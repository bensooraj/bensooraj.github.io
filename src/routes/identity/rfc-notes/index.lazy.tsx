import { createLazyFileRoute } from '@tanstack/react-router'
import RFCTimeline from '@/components/RFCTimeline'

export const Route = createLazyFileRoute('/identity/rfc-notes/')({
    component: RFCNotes
})

function RFCNotes() {
    return (
        <div>
            <div className="container px-4 py-8 mx-auto">
                <h1>RFC Notes</h1>
                <RFCTimeline />
            </div>
        </div>
    )
}