import Layout from '../../../_shared/Layout'
import Dashboard from './dasboard'

function FacilityHomePage() {
  return (
    <>
      <Layout children={<Dashboard></Dashboard>}></Layout>
    </>
  )
}

export default FacilityHomePage
