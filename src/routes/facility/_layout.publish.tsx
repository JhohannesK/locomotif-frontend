import PublishLayout from '@/container/Facility/Publish/PublishLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/facility/_layout/publish')({
  component: () => <PublishLayout />,
})
