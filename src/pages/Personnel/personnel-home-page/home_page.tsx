import Layout from '../../../_shared/Layout/Layout'
import { PostingCardType } from '../@types'

function PersonnelHomePage({
  data,
  isLoading,
}: {
  data: PostingCardType[] | undefined
  isLoading: boolean
}) {
  // const filter = useSelector((state: RootState) => state.personnel.endpoint)
  // const { data, isLoading } = usePersonnel(filter)

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
