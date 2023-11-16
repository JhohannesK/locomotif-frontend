import { TextField } from '@mui/material'
import FormSelect from '../../facility-home-page/select/Select'
import {
  JobPostBox,
  JobPostButtons,
  JobPostHeader,
  JobPostOptions,
  JobPostTextContainer,
  JobPostTitle,
} from './styles'
import GeneralButton from '../../../../_shared/components/button/Button'
import { colors } from '../../../../colors'

function MiddlePane() {
  return (
    <>
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
          <FormSelect label={'Type Of Work'} menu={['Surgeon']} />
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
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '137.14%',
              padding: '10px 34px',
              borderRadius: '10px',
              width: '127px',
              maxHeight: '41px',
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
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '137.14%',
              padding: '10px 34px',
              borderRadius: '10px',
              width: '127px',
              maxHeight: '41px',
            }}
            title="Draft Job"
            size={'large'}
          />
        </JobPostButtons>
      </JobPostBox>
    </>
  )
}

export default MiddlePane
