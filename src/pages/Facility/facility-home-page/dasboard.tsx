import {
  FacilityDashboard,
  FacilityLeftContainer,
  FacilityLeftUpperContent,
  FacilityMidContainer,
  FacilityRightContainer,
  JobPostBox,
  JobPostHeader,
  JobPostTitle,
} from './home_page_style'
import LeftPaneProfile from '../../../_shared/components/LeftPaneProfile/LeftPaneProfile'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
function Dashboard() {
  return (
    <>
      <FacilityDashboard>
        <FacilityLeftContainer>
          <FacilityLeftUpperContent>
            <LeftPaneProfile
              name="Ridge Hospital"
              jobTitle="Surgeaon"
              workExperience="High"
            />
          </FacilityLeftUpperContent>
        </FacilityLeftContainer>
        <FacilityMidContainer>
          <JobPostBox>
            <JobPostHeader>
              <JobPostTitle>Create Job Post</JobPostTitle>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Job Type"
                >
                  <MenuItem value={10}>One-time</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </JobPostHeader>
          </JobPostBox>
        </FacilityMidContainer>
        <FacilityRightContainer></FacilityRightContainer>
      </FacilityDashboard>
    </>
  )
}

export default Dashboard
