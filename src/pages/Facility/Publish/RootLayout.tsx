import { useAppSelector } from '../../../redux/hooks/hook'
import { TJobSteps } from '../../../types'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'
import Layout from '../Layout'
import JobPublishingSteps from '../components/JobPublishingSteps'
import PrevPostings from '../components/PrevPostings'
import JobLayout from './Layout'
import ContractDetails from './Steps/ContractDetails'
import JobDetails from './Steps/JobDetails'
import Location from './Steps/Location'
import PayType from './Steps/PayType'
import PersonnelSpecification from './Steps/PersonnelSpecification'
import StaffInformation from './Steps/StaffInformation'
// import JobDetails from './Steps/JobDetails'

const RootLayout = () => {
  return (
    <Layout>
      <JobLayout
        steppers={<JobPublishingSteps />}
        jobDetails={<ConponentToRender />}
        prevPosting={<PrevPostings />}
      />
    </Layout>
  )
}

const ConponentToRender = () => {
  const active = useAppSelector((state) => state.app.activeJobPublishingStep)

  return (
    <>
      <ConditionRenderComponent renderIf={active === TJobSteps['Job Details']}>
        <JobDetails />
      </ConditionRenderComponent>
      <ConditionRenderComponent
        renderIf={active === TJobSteps['Contract Details']}
      >
        <ContractDetails />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={active === TJobSteps['Pay type']}>
        <PayType />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={active === TJobSteps.Location}>
        <Location />
      </ConditionRenderComponent>
      <ConditionRenderComponent
        renderIf={active === TJobSteps['Staff information']}
      >
        <StaffInformation />
      </ConditionRenderComponent>
      <ConditionRenderComponent
        renderIf={active === TJobSteps['Personel Specification']}
      >
        <PersonnelSpecification />
      </ConditionRenderComponent>
      {/* <ConditionRenderComponent renderIf={active === 6}>
        <PayType />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={active === 7}>
        <PayType />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={active === 8}>
        <PayType />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={active === 9}>
        <PayType />
      </ConditionRenderComponent> */}
    </>
  )
}

export default RootLayout
