import { FormProvider } from 'react-hook-form'
import {
  AuthContainer,
  AuthContent,
  AuthFields,
  AuthFieldsLabel,
  AuthUpperContent,
  AuthUpperContentH2,
  AuthUpperContentP,
} from '../../../../_shared/auth_styles'
import { GenericButton, GenericInput, GenericSelect } from '../../../../_shared'
import useFacilitySignUp from '../hook/useFacilitySignUp'
import { colors } from '../../../../colors'
import { ButtonsBox, SelectBox } from '../styles'
import { TextField } from '@mui/material'

const FacilitySetUpProfile = ({
  handleActiveState,
}: {
  handleActiveState: (index: number) => void
}) => {
  const { methods } = useFacilitySignUp()
  return (
    <>
      <AuthContainer>
        <FormProvider {...methods}>
          <AuthContent>
            <AuthUpperContent>
              <AuthUpperContentH2>Setup Your Profile</AuthUpperContentH2>
              <AuthUpperContentP>
                Please input your details as specified below
              </AuthUpperContentP>
            </AuthUpperContent>
            <AuthFields>
              <AuthFieldsLabel>Bio</AuthFieldsLabel>
              <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue=" "
                fullWidth
              />
              <AuthFieldsLabel>Location</AuthFieldsLabel>

              <SelectBox>
                <GenericSelect
                  label={'Country'}
                  data={['Ghana', 'The UK']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
                <GenericSelect
                  label={'Region'}
                  data={['Greater Accra', 'Ashanti']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
                <GenericSelect
                  label={'City'}
                  data={['Accra', 'Kumasi']}
                  defaultValue="ama"
                  sx={{ width: '30%' }}
                />
              </SelectBox>
              <AuthFieldsLabel>Digital Address</AuthFieldsLabel>

              <GenericInput
                name="address"
                label=""
                type="text"
                placeholder="e.g. GA-492-53"
              />
            </AuthFields>
            <ButtonsBox>
              <GenericButton
                variantText="outlined"
                title="Skip"
                sx={{
                  backgroundColor: '#FFF',
                  borderColor: colors.button.pineGreen,
                  color: 'rgba(0, 0, 0, 0.60)',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '137.14%',
                  width: '100%',
                  borderRadius: '10px',
                  hover: {
                    backgroundColor: '#FFF',
                    borderColor: colors.button.pineGreen,
                  },
                }}
                size="large"
                onClick={() => handleActiveState(4)}
              />
              <GenericButton
                title="Next"
                sx={{
                  backgroundColor: colors.button.pineGreen,
                  width: '100%',
                  borderRadius: '10px',
                  color: '#F6FBFF',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '137.14%',
                }}
                size="large"
                onClick={() => handleActiveState(4)}
              />
            </ButtonsBox>
          </AuthContent>
        </FormProvider>
        {/* {mutation.isSuccess ? <div>okay okay</div> : <>oops</>} */}
      </AuthContainer>
    </>
  )
}

export default FacilitySetUpProfile
