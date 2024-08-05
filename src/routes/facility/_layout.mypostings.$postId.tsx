import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/facility/_layout/mypostings/$postId')({
  component: () => <div>Hello /facility/_layout/mypostings/$postId!</div>,
})
