import {
  Wrapper,
  ImageWrapper,
  DetailsWrapper,
  NameWrapper,
  TitleWrapper,
  DateWrapper,
  DateAndTitleWrapper,
} from './styles'

function IndividualPendingApplication({
  name,
  jobTitle,
  date,
}: PendingApplicationProps) {
  return (
    <>
      <Wrapper>
        <ImageWrapper>{/* insert image here*/}</ImageWrapper>
        <DetailsWrapper>
          <NameWrapper>{name}</NameWrapper>
          <DateAndTitleWrapper>
            <TitleWrapper>{jobTitle} |</TitleWrapper>
            <DateWrapper> {date}</DateWrapper>
          </DateAndTitleWrapper>
        </DetailsWrapper>
      </Wrapper>
    </>
  )
}

interface PendingApplicationProps {
  name: string
  jobTitle: string
  date: string
}

export default IndividualPendingApplication
