import AvatarDisplay from '@/_shared/components/Avatar/Avatar'
import { BookMarkedIcon } from 'lucide-react'
import { GoLocation } from 'react-icons/go'

const JobCard = () => {
  return (
    <div className="flex flex-col gap-5 justify-between cursor-pointer min-h-56 max-w-[57rem] border bg-white rounded-xl border-border-tertiary shadow-lg">
      <div className="p-8 flex flex-col gap-5">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-between gap-5">
            <AvatarDisplay
              fullname="Linchester Hospital"
              height={60}
              width={60}
            />
            <div>
              <p className="text-lg font-bold">Linchester Hospital</p>
              <div className="flex gap-4">
                <p className="text-sm opacity-60">Surgeon</p>
                <div className="flex gap-1 items-center">
                  <GoLocation className="text-primary" />
                  <span className="text-sm opacity-60">Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>
          <BookMarkedIcon className="h-6 w-6 text-primary" />
        </div>
        <div className="w-full">
          <p className="opacity-60">
            Lister Hospital is seeking a dedicated and detail-oriented Medical
            Research Assistant to join our team of esteemed researchers. As a
            Medical Research Assistant, you will play a crucial role in
            supporting our ongoing research projects and contributing to
            advancements in the field of biomedicine.lay....
          </p>
        </div>
        <div>
          <p className="text-sm opacity-60">Posted 2 days ago</p>
        </div>
      </div>
    </div>
  )
}

export default JobCard
