import { Wrapper } from './styles'
import Layout from '../../../_shared/Layout/Layout'

function PersonnelHomePage() {
  return (
    <Layout dashboardType="personnel">
      <Layout.ConfirmationModal />
      <Wrapper>
        <Layout.LeftSide />
        <Layout.PersonnelMidContent />
        <Layout.PersonnelFilter />
      </Wrapper>
    </Layout>
  )
}

export default PersonnelHomePage
