import { Avatar } from '@mui/material'
import { BiStar } from 'react-icons/bi'
import GeneralButton from '../../../_shared/components/button/Button'
import LocoProgressBars from '../../../_shared/components/ProgressBar'

const ProfileCard = () => {
  const progressValue: number = 78
  return (
    <div className="flex flex-col items-center justify-center border bg-white max-w-[26rem] rounded-xl border-border-tertiary shadow-lg">
      <div className="p-4 flex flex-col gap-2 items-center justify-center">
        <Avatar sx={{ height: '6rem', width: '6rem', fontWeight: 'bold' }}>
          GM
        </Avatar>
        <div className="w-full flex flex-col items-center">
          <div className="font-bold text-xl">Lister Hospital</div>
          <div className="flex flex-row gap-1 opacity-60">
            Cardiac hospital <span>|</span> <BiStar color="yellow" /> 4.7{' '}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <div className="text-base opacity-60">
            Complete Profile in order to start posting jobs
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <LocoProgressBars value={progressValue} />
            <p className="opacity-60">{progressValue}%</p>
          </div>
        </div>
        <GeneralButton
          sx={{ width: '100%', paddingX: '10px' }}
          title="Setup Profile"
        />
      </div>
    </div>
  )
}

export default ProfileCard
