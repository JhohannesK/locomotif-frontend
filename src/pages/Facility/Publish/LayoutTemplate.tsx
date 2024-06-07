import Header from '../components/Header'
import HeaderBtns from '../components/HeaderBtns'

const JobLayout = ({
  steppers,
  prevPosting,
  jobDetails,
}: {
  steppers: JSX.Element
  prevPosting: JSX.Element
  jobDetails: JSX.Element
}) => {
  return (
    <div className="flex items-start gap-10 max-w-[1700px] mx-auto">
      <div className="flex flex-col gap-10 w-full">
        <div>
          <Header />
        </div>
        <div className="flex gap-10 h-full">
          <div className="hidden lg:flex w-[28rem]">
            <div className="w-full">{steppers}</div>
          </div>
          <div className="h-full w-full">{jobDetails}</div>
        </div>
      </div>
      <div className="hidden xl:flex flex-col h-full gap-10 w-[25rem]">
        <HeaderBtns />
        <div>{prevPosting}</div>
      </div>
    </div>
  )
}

export default JobLayout
