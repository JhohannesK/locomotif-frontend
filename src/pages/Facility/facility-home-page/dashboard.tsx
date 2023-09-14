import {
  FacilityDashboard,
  FacilityLeftContainer,
  FacilityLeftLowerContent,
  FacilityLeftMidBox,
  FacilityLeftMidBoxContent,
  FacilityLeftMidContent,
  FacilityLeftMidTitle,
  FacilityLeftUpperContent,
  FacilityMidContainer,
  FacilityRightContainer,
  JobPostBox,
  JobPostButtons,
  JobPostHeader,
  JobPostOptions,
  JobPostTextContainer,
  JobPostTitle,
  LeftContent,
  RightContent,
  RightContentH4,
  RightContentP,
} from './home_page_style'
import LeftPaneProfile from '../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import FormSelect from './select/Select'
import { TextField } from '@mui/material'
import GeneralButton from '../../../_shared/components/button/Button'
import { colors } from '../../../colors'
import member_one from '../../../_shared/assets/member 1.png'
import member_two from '../../../_shared/assets/member 2.png'
import member_three from '../../../_shared/assets/member 3.png'

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
            <FacilityLeftMidTitle>
              This week's summary
              <FacilityLeftMidBox>
                <FacilityLeftMidBoxContent>
                  <LeftContent>
                    <img
                      src={member_one}
                      alt="member one"
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </LeftContent>
                  <RightContent>
                    <RightContentH4>24</RightContentH4>
                    <RightContentP>New candidates</RightContentP>
                  </RightContent>
                </FacilityLeftMidBoxContent>
                <FacilityLeftMidBoxContent>
                  <LeftContent>
                    <img
                      src={member_two}
                      alt="member two"
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </LeftContent>
                  <RightContent>
                    <RightContentH4>12</RightContentH4>
                    <RightContentP>Processing applications</RightContentP>
                  </RightContent>
                </FacilityLeftMidBoxContent>
                <FacilityLeftMidBoxContent>
                  <LeftContent>
                    <img
                      src={member_three}
                      alt="member three"
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </LeftContent>
                  <RightContent>
                    <RightContentH4>12</RightContentH4>
                    <RightContentP>Available jobs</RightContentP>
                  </RightContent>
                </FacilityLeftMidBoxContent>
              </FacilityLeftMidBox>
            </FacilityLeftMidTitle>
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
