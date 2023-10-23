import {
  Contents,
  DescriptionBox,
  IconWrapper,
  Info,
  InfoBox,
  InfoBoxContainer,
  Logo,
  MainWrapper,
  Title,
} from './styles'
import page_not_found from '../../_shared/assets/page_not_found.svg'
import { GenericButton } from '../../_shared'
import { GoCheckCircleFill } from 'react-icons/go'

function PageNotFound() {
  return (
    <MainWrapper>
      <Contents>
        <Logo>Loco</Logo>
        <DescriptionBox>
          <img src={page_not_found} alt={'page not found'} />
          <Title>Oops, Page not found</Title>
          <InfoBoxContainer>
            <InfoBox>
              <IconWrapper>
                <GoCheckCircleFill />
              </IconWrapper>
              <Info>
                The URL is mistyped or contains a typographical error.
              </Info>
            </InfoBox>
            <InfoBox>
              <IconWrapper>
                {' '}
                <GoCheckCircleFill />
              </IconWrapper>
              <Info>The webpage or resource has been moved or deleted. </Info>
            </InfoBox>
            <InfoBox>
              <IconWrapper>
                {' '}
                <GoCheckCircleFill />
              </IconWrapper>
              <Info>The server is temporarily or permanently down. </Info>
            </InfoBox>
            <InfoBox>
              <IconWrapper>
                {' '}
                <GoCheckCircleFill />
              </IconWrapper>
              <Info>The server is misconfigured. </Info>
            </InfoBox>
          </InfoBoxContainer>
          <GenericButton
            title="Back To Homepage"
            sx={{ width: '100%' }}
            size="large"
          />
        </DescriptionBox>
      </Contents>
    </MainWrapper>
  )
}

export default PageNotFound
