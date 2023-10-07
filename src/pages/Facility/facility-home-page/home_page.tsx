import Layout from '../../../_shared/Layout'
import Dashboard from './dashboard'

function FacilityHomePage() {
  return (
    <>
      <Layout children={<Dashboard />} dashboardType={'facility'}></Layout>
    </>
  )
}

export default FacilityHomePage
