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
import GenericSelect from '../../../../_shared/components/inputs/Select'
import { colors } from '../../../../colors'

function MiddlePane() {
  return (
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
          rows={15}
          defaultValue=" "
          fullWidth
        />
      </JobPostTextContainer>
      <JobPostOptions>
        <GenericSelect
          label={'Speciality'}
          sx={{ width: '100%' }}
          data={['Surgeon', 'Doctor']}
        />
        <GenericSelect
          label={'Speciality'}
          sx={{ width: '100%' }}
          data={['Surgeon', 'Doctor']}
        />
        <GenericSelect
          label={'Speciality'}
          sx={{ width: '100%' }}
          data={['Surgeon', 'Doctor']}
        />
        <GenericSelect
          label={'Speciality'}
          sx={{ width: '100%' }}
          data={['Surgeon', 'Doctor']}
        />
        {/* <FormSelect label={'Type Of Work'} menu={['Surgeon']} />
        <FormSelect label={'Location'} menu={['Airport,Accra']} />
        <FormSelect label={'Date Added'} menu={['Surgeon']} />
        <FormSelect label={'Salary'} menu={['$1500']} /> */}
      </JobPostOptions>
      <JobPostButtons>
        <GeneralButton
          variantText={'outlined'}
          sx={{
            backgroundColor: colors.button.pineGreen,
            color: '#FFF',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '137.14%',
            padding: '10px 34px',
            borderRadius: '10px',
            width: '127px',
          }}
          title="Post Job"
          size={'large'}
        />
        <GeneralButton
          variantText={'outlined'}
          sx={{
            backgroundColor: '#FFF',
            border: `1px solid ${colors.button.pineGreen}`,
            color: colors.button.pineGreen,
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '137.14%',
            padding: '10px 34px',
            borderRadius: '10px',
            width: '127px',
          }}
          title="Draft Job"
          size={'large'}
        />
      </JobPostButtons>
    </JobPostBox>
  )
}

export default MiddlePane
