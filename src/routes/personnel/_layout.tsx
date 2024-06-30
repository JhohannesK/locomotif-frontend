import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/personnel/_layout')({
  component: () => <div>Hello /personnel/_layout!</div>,
})
