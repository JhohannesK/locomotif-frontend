import { styled } from 'styled-components'
import ProfileCard from '../components/ProfileCard'
import Layout from '../Layout'
import ApplicationUpdate from './ApplicationUpdate'
import Constants from '../../../utils/constants'
import { GenericButton } from '../../../_shared'
import { useNavigate } from 'react-router-dom'

function Overview() {
  const navigate = useNavigate()
  const { publish } = Constants.ROUTES.PAGES.FACILITY
  return (
    <Layout>
      <Wrapper>
        <CardContainer>
          <ProfileCard />
          <GenericButton
            title="Create Post"
            sx={{ width: '100%', maxWidth: '20rem' }}
            onClick={() => navigate(publish)}
          />
        </CardContainer>
        <Container>
          <ApplicationUpdate />
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default Overview

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1201px) {
    flex-direction: row;
    gap: 4rem;
  }
  max-width: 1700px;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  gap: 3rem;
  padding: 2.5rem 0;
  /* overflow-y: scroll; */
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 20rem;
  @media screen and (max-width: 1200px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-left: 0;
  }
  padding-left: 3rem;
  /* ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_L_PX_MAX} {
  } */
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding-right: 0;
  }
  width: 67%;
  padding-right: 3rem;
  /* width: 30%; */
  /* ${Constants.LAYOUT.MEDIA_QUERIES.LAPTOP_M_PX} {
  } */
`
