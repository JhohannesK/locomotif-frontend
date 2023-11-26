import { useSelector } from 'react-redux'
import Layout from '../../../_shared/Layout/Layout'
import usePersonnel from './hook/usePersonnel'
import { RootState } from '../../../redux/store'
import { PostingCardType } from '../@types'

function PersonnelHomePage() {
  const filter = useSelector((state: RootState) => state.personnel.endpoint)
  const { data, isLoading } = usePersonnel(filter)

  return (
    <div style={{ width: '100%', display: 'flex', flexGrow: '1', gap: '20px' }}>
      <Layout.PersonnelMidContent
        data={data as PostingCardType[]}
        isLoading={isLoading}
      />
      <Layout.PersonnelFilter />
    </div>
  )
}

export default PersonnelHomePage
