import { Link } from '@tanstack/react-router'
import ApplicantCard from './ApplicantCard'

const HistoryCardTemplate = () => {
  return (
    <div className="border border-border-tertiary bg-white rounded-lg">
      <div className="p-5 flex flex-col gap-5">
        <div className="flex items-center justify-between bg-background-secondary rounded-lg ">
          <div className="py-3 px-5 flex items-center justify-between w-full">
            <div>
              <p style={{ fontWeight: 'bold' }}>Cardiologist</p>
              <div
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <p style={{ fontWeight: '500' }}>$1500</p>
                <p>One time</p>
              </div>
            </div>
            <div>
              <p style={{ opacity: '.6' }}>4th Nov, 2024</p>
              <p style={{ opacity: '.6' }}>7 days left</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p style={{ fontWeight: 'bold' }}>Applicants</p>
            <Link to="/facility">View All</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 overflow-x-scroll py-4">
              <ApplicantCard />
              <ApplicantCard />
              <ApplicantCard />
              <ApplicantCard />
              <ApplicantCard />
              <ApplicantCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryCardTemplate

// const HistoryCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 1rem;
//   border-radius: 0.5rem;
//   background: ${colors.background.white};
//   border: 1px solid ${colors.border.timberwolf};
//   box-shadow: 0px 2px 2px rgba(87, 86, 86, 0.25);
// `
// const CardTitle = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   gap: 1rem;
//   align-items: center;
//   border-radius: 0.5rem;
//   padding: 0.5rem 1rem;
//   background: ${colors.background.whiteSmoke};
// `
// const HeaderSpace = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   align-items: flex-start;
// `

// const CardBody = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 0.8rem 0;
//   border-radius: 0.5rem;
//   background: ${colors.background.white};
// `
// const Title = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   gap: 1rem;
//   align-items: center;
// `
// const ViewLink = styled(Link)`
//   font-size: 0.9rem;
//   font-weight: bold;
//   text-decoration: none;
//   color: ${colors.text.pineGreen};
// `

// const CardHolder = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   overflow-x: scroll;
//   scrollbar-width: thin; /* Firefox */
//   scrollbar-color: transparent transparent; /* Firefox */

//   &::-webkit-scrollbar {
//     width: 12px; /* Adjust as needed */
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: transparent; /* Hide thumb */
//   }

//   &::-webkit-scrollbar-track {
//     background-color: transparent; /* Hide track */
//   }
// `
