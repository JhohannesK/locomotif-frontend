import { Avatar, Chip } from '@mui/material'
import { colors } from '../../../colors'
import { BiStar } from 'react-icons/bi'
import GeneralButton from '../../../_shared/components/button/Button'

const ApplicantCard = () => {
  return (
    <div className="flex flex-col rounded-lg border border-border-tertiary min-w-[30rem]">
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar sx={{ height: '3rem', width: '3rem', fontWeight: 'bold' }}>
              GM
            </Avatar>
            <div>
              <p className="font-bold text-lg">Dr. John Doe</p>
              <p className="text-[14px] opacity-60">Cardiologist</p>
            </div>
          </div>
          <Chip
            label="Pending"
            sx={{ background: '#FF8E2533', color: '#FF8E25' }}
            size="small"
          />
        </div>
        <div className="flex items-center gap-3">
          <p>14 Reviews</p>
          <div className="flex items-center gap-1">
            <BiStar style={{ color: '#FF8E25', fontSize: '20px' }} />
            <p className="opacity-60">4.7</p>
          </div>
        </div>
        <div>
          <p className="opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            incidunt excepturi eveniet quod inventore! Ullam dolores quos aut
            nobis autem?
          </p>
        </div>
        <div className="flex items-center gap-4">
          <GeneralButton
            sx={{
              width: '100%',
              bgcolor: 'white',
              borderRadius: '0.5rem',
              color: `${colors.text.pineGreen}`,
              border: `1px solid ${colors.border.timberwolf}`,
            }}
            title="Visit Profile"
          />
          <GeneralButton
            sx={{ width: '100%', borderRadius: '.5rem' }}
            title="View CV"
          />
        </div>
      </div>
    </div>
  )
}

export default ApplicantCard

// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 0.6rem;
//   border-radius: 0.5rem;
//   background: ${colors.background.white};
//   box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
//   width: 100%;
//   min-width: 400px;
//   max-width: 600px;
//   border: 1px solid ${colors.border.timberwolf};
// `
// const HeaderRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   align-items: center;
//   justify-content: space-between;
// `
// const NameAndTitle = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0;
// `

// const LeftHeader = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   align-items: center;
// `

// const ReviewRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   align-items: center;
//   justify-content: flex-start;
// `

// const Rating = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 0.3rem;
//   align-items: center;
// `

// const BtnRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   align-items: center;
//   justify-content: space-between;
// `
