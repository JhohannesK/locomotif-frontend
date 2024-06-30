import { useNavigate } from '@tanstack/react-router'
import { GenericButton } from '../../../_shared'

const CreatePostCard = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center border bg-white max-w-[26rem] rounded-xl border-border-tertiary shadow-lg">
      <div className="p-4 flex flex-col gap-2 items-center justify-center">
        <div className="font-bold text-xl">Create and Update Job posting</div>
        <div className="flex flex-row gap-1 opacity-60">
          Follow the step by step process to create or update a job posting
        </div>
        <GenericButton
          title="Create Post"
          sx={{ width: '100%' }}
          onClick={() => navigate({ to: '/facility/publish' })}
        />
      </div>
    </div>
  )
}

export default CreatePostCard
