import { FormProvider, useForm } from 'react-hook-form'
import { GenericButton, Input } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch } from '../../../../redux/hooks/hook'
import { nextPage, prevPage } from '../../../../redux/slices/appSlice'
import CountrySelect from '../../../../_shared/components/inputs/CountrySelect'

const Location = () => {
  const methods = useForm()
  const dispatch = useAppDispatch()
  return (
    <div className="border details-container">
      <div className="details-container__wrapper" style={{ height: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Location</p>
        <FormProvider {...methods}>
          <form className="form-control">
            <div className="w-full">
              <div>Country</div>
              <CountrySelect name="country" />
            </div>
            <div>
              <div>Address line 1</div>
              {/* <GenericInput
                name="line-1"
                placeholder="Address 1"
                sx={{ width: '100%' }}
              /> */}
              <Input name="address1" placeholder="Address line 1" />
            </div>
            <div>
              <div>Address line 2(optional)</div>
              <Input name="" placeholder="Address line 2" />
            </div>
            <div>
              <div>Town or city Address</div>
              <Input name="" placeholder="Town or city" />
            </div>
            <div>
              <div>Region Address (option)</div>
              <Input name="" placeholder="Region" />
            </div>
            <div>
              <div>Digital Address</div>
              <Input name="" placeholder="Digital Address" />
            </div>
          </form>
          <div className="btn-group">
            <GenericButton
              type="button"
              sx={{
                width: '8rem',
                bgcolor: 'white',
                border: `1px solid ${colors.text.pineGreen}`,
                color: `${colors.text.pineGreen}`,
              }}
              title="Previous"
              onClick={() => {
                dispatch(prevPage())
              }}
            />
            <GenericButton
              type="button"
              sx={{ width: '8rem' }}
              title="Next"
              onClick={() => {
                dispatch(nextPage())
              }}
            />
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

export default Location

// const FormWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
// `
