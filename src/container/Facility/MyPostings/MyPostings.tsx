import postings from '@/mocks/postings.json'
import Header from './Header'
import { ArrowRight } from 'lucide-react'

const MyPostings = () => {
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
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl">{posting.title}</h1>
                    <p className="bg-gray-200 max-w-fit py-1 px-2 rounded-full text-xs">
                      {posting.location}
                    </p>
                  </div>
                  <div>
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MyPostings

export interface Posting {
  id: string
  required_role: Array<string>
  title: string
  location: string
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
