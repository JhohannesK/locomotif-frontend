import Overview from '@/container/Facility/Overview/Overview'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/facility')({
  component: () => <Overview />,
})
