import FacilityRootLayout from '../Layout'
import postings from '@/pages/mocks/postings.json'
import Header from './Header'

const MyPostings = () => {
  return (
    <FacilityRootLayout>
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <div>
          {postings.map((posting) => {
            return (
              <div key={posting.id} className="px-2 py-5 border-b">
                <h1 className="text-2xl">{posting.title}</h1>
                <p>{posting.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </FacilityRootLayout>
  )
}

export default MyPostings

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
