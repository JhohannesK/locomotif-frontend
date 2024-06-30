import { CgDanger } from 'react-icons/cg'
import GeneralButton from '../button/Button'
import { useNavigate } from '@tanstack/react-router'

const EmptyState = () => {
  const navigate = useNavigate()
  return (
    <div className="border border-border-tertiary bg-white rounded-xl">
      <div className="p-10 md:p-16 flex flex-col items-center justify-center">
        <div className="p-3 rounded-full bg-secondary">
          <CgDanger className="text-red-600" size={40} />
        </div>
        <div className="text-center">
          <p className="font-bold text-3xl">You've not posted a job yet!</p>
          <p className="font-semibold text-2xl">
            Click the button to create a post and kickstart
          </p>
          <p className="text-sm opacity-70 pt-4">
            Follow the step by step process to create your first official job
            posting
          </p>
        </div>
        <GeneralButton
          title="Get Started"
          className="mt-5"
          onClick={() => navigate({ to: '/facility' })}
        />
      </div>
    </div>
  )
}

export default EmptyState
