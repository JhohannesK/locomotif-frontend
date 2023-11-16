import Layout from '../../../_shared/Layout/Layout'

function PersonnelHomePage() {
  return (
    <div style={{ width: '100%', display: 'flex', flexGrow: '1', gap: '20px' }}>
      <Layout.PersonnelMidContent />
      <Layout.PersonnelFilter />
    </div>
  )
}

export default PersonnelHomePage
