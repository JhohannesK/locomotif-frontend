import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/personnel')({
  component: () => <div>Hello /personnel!</div>,
})
