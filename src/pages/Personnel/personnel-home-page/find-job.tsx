import { useSelector } from 'react-redux'
import PersonnelLayout from '../../../_shared/Layout/Layout'
import Layout from '../../../_shared/Layout/Layout'
import { PostingCardType } from '../@types'
import usePersonnel from './hook/usePersonnel'
import { Wrapper } from './styles'
import { RootState } from '../../../redux/store'

function FindJob() {
  const filter = useSelector((state: RootState) => state.personnel.endpoint)
  const { data, isLoading } = usePersonnel(filter)

  return (
    <Wrapper>
      <PersonnelLayout.LeftSide />
      <div
        style={{ width: '100%', display: 'flex', flexGrow: '1', gap: '2.8rem' }}
      >
        <Layout.PersonnelMidContent
          data={data as PostingCardType[]}
          isLoading={isLoading}
        />
        <Layout.PersonnelFilter />
      </div>
    </Wrapper>
  )
}

export default FindJob
