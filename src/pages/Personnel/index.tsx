import { useSelector } from 'react-redux'
import Layout from '../../_shared/Layout/Layout'
import ConditionRender from '../../utils/ConditionRender'
import { Wrapper } from './personnel-home-page/styles'
import { RootState } from '../../redux/store'
import ApplicationsPage from './personnel-applications-page/applicationsPage/applicationsPage'
import PersonnelHomePage from './personnel-home-page/home_page'

const Page = () => {
  const Application = ConditionRender(ApplicationsPage)
  const Personnel = ConditionRender(PersonnelHomePage)
  const { activeNav } = useSelector((state: RootState) => state.personnel)
  console.log('🚀 ~ file: index.tsx:13 ~ Page ~ activeNav:', activeNav)
  return (
    <Layout dashboardType="personnel">
      <Layout.ConfirmationModal />
      <Wrapper>
        <Layout.LeftSide />
        <Personnel renderIf={activeNav === 1} />
        <Application renderIf={activeNav === 3} />
      </Wrapper>
    </Layout>
  )
}

export default Page
