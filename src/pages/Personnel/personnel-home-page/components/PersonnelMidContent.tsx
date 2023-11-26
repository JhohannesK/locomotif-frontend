import React from 'react'
import {
  AboutText,
  ButtonStyles,
  HomePageContainer,
  LowerContent,
  MidContent,
  MidContentText,
  SearchBarContainer,
  SearchStyles,
} from '../styles'
import { SearchInput } from '../../../../_shared'
import GeneralButton from '../../../../_shared/components/button/Button'
import { BiSearch } from 'react-icons/bi'
import PostingListTemplate from './postingListTemplate'
import { LayoutContext } from '../../../../_shared/Layout/context/LayoutContext'
import { JobCardType } from '../../../../_shared/@types'

const PersonnelMidContent = ({
  data,
  isLoading,
}: {
  data: JobCardType[]
  isLoading: boolean
}) => {
  const { handleOpen } = React.useContext(LayoutContext)
  return (
    <HomePageContainer>
      <MidContent>
        <MidContentText>Find Your Dream Job Here!</MidContentText>
        <AboutText>
          Locomotif is the best place to find your dream Medical Job. Explore
          our 1,000’s available jobs
        </AboutText>
        <SearchBarContainer>
          <SearchInput
            name="Search"
            sx={SearchStyles}
            icon={<BiSearch />}
            placeholder="Search job"
            size={'small'}
          />
          <GeneralButton title="Search" sx={ButtonStyles} />
        </SearchBarContainer>
      </MidContent>
      <LowerContent>
        <PostingListTemplate
          data={data}
          isLoading={isLoading}
          handleOpen={handleOpen}
        />
      </LowerContent>
    </HomePageContainer>
  )
}

export default PersonnelMidContent
