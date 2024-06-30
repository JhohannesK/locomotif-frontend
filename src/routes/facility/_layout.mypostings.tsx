import { createFileRoute } from '@tanstack/react-router'

import postings from '@/mocks/postings.json'
import Header from '@/container/Facility/MyPostings/Header'

export const Route = createFileRoute('/facility/_layout/mypostings')({
  component: () => (
    <div>
      <MyPostings />
    </div>
  ),
})

function MyPostings() {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto">
        <Header count={postings.length} />
        <div>
          {postings.map((posting) => {
            return (
              <div
                key={posting.id}
                className="px-2 py-5 border-b cursor-pointer"
              >
                <h1 className="text-2xl">{posting.title}</h1>
                <p>{posting.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export interface Posting {
  id: string
  required_role: Array<string>
  title: string
  description: string
  full_time: boolean
  rate_per_month: number
  application_deadline: string
  start_time: string
  end_time: string
  isactive: boolean
  medical_facility: string
  created_at: string
}
