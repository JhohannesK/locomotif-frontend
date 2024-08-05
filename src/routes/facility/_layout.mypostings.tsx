import { createFileRoute } from '@tanstack/react-router'

import MyPostings from '@/container/Facility/MyPostings/MyPostings'

export const Route = createFileRoute('/facility/_layout/mypostings')({
  component: () => (
    <div>
      <MyPostings />
    </div>
  ),
})
