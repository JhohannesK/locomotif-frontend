import {
  FacilityDashboard,
  FacilityLeftContainer,
  FacilityLeftLowerContent,
  FacilityLeftMidContent,
  FacilityLeftUpperContent,
  FacilityMidContainer,
  FacilityRightContainer,
  JobPostBox,
  JobPostButtons,
  JobPostHeader,
  JobPostOptions,
  JobPostTextContainer,
  JobPostTitle,
} from './home_page_style'
import LeftPaneProfile from '../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import FormSelect from './select/Select'
import { TextField } from '@mui/material'
import GeneralButton from '../../../_shared/components/button/Button'
import { colors } from '../../../colors'
import WeeklySummary from '../../../_shared/components/WeeklySummary/WeeklySummary'

function Dashboard() {
  return (
    <>
      <FacilityDashboard>
        <FacilityLeftContainer>
          <FacilityLeftUpperContent>
            <LeftPaneProfile
              name="Ridge Hospital"
              jobTitle="Cardiac Hospital"
              workExperience="Airport, Accra"
            />
          </FacilityLeftUpperContent>
          <FacilityLeftMidContent>
            <WeeklySummary
              numberOfNewCandidates={3}
              numberOfProcessingApplications={2}
              numberOfAvailableJobs={1}
            />
          </FacilityLeftMidContent>
          <FacilityLeftLowerContent></FacilityLeftLowerContent>
        </FacilityLeftContainer>
        <FacilityMidContainer>
          <JobPostBox>
            <JobPostHeader>
              <JobPostTitle>Create Job Post</JobPostTitle>
              <FormSelect label="Job Type" menu={['One-time']} />
            </JobPostHeader>
            <JobPostTextContainer>
              <TextField
                id="outlined-multiline-static"
                label="Job Description"
                multiline
                rows={4}
                defaultValue=" "
                fullWidth
              />
            </JobPostTextContainer>
            <JobPostOptions>
              <FormSelect label={'Medical Field'} menu={['Surgeon']} />
              <FormSelect label={'Location'} menu={['Airport,Accra']} />
              <FormSelect label={'Date Added'} menu={['Surgeon']} />
              <FormSelect label={'Salary'} menu={['$1500']} />
            </JobPostOptions>
            <JobPostButtons>
              <GeneralButton
                variantText={'outlined'}
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  borderColor: colors.button.aquamarine,
                  height: '2rem',
                  color: '#FFF',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '137.14%',
                  padding: '10px 34px',
                  borderRadius: '10px',
                  width: '140px',
                  minHeight: '40px',
                }}
                title="Post Job"
                size={'large'}
              />
              <GeneralButton
                variantText={'outlined'}
                sx={{
                  backgroundColor: '#FFF',
                  border: `1px solid ${colors.button.pineGreen}`,
                  height: '2rem',
                  color: colors.button.pineGreen,
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '137.14%',
                  padding: '10px 34px',
                  borderRadius: '10px',
                  width: '140px',
                  minHeight: '40px',
                }}
                title="Draft Job"
                size={'large'}
              />
            </JobPostButtons>
          </JobPostBox>
        </FacilityMidContainer>
        <FacilityRightContainer></FacilityRightContainer>
      </FacilityDashboard>
    </>
  )
}

export default Dashboard
