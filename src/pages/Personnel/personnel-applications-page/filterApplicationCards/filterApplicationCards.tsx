import GeneralButton from '../../../../_shared/components/button/Button'
import {
  AddStyles,
  ButtonStyles,
  ButtonsWrapper,
  FilterWrapper,
} from './styles'

const ApplicationFilterBar = () => {
  return (
    <FilterWrapper>
      <ButtonsWrapper>
        <GeneralButton title="All" sx={AddStyles} />
        <GeneralButton title="Accepted" sx={ButtonStyles} />
        <GeneralButton title="Pending" sx={ButtonStyles} />
        <GeneralButton title="On Hold" sx={ButtonStyles} />
      </ButtonsWrapper>
    </FilterWrapper>
  )
}

export default ApplicationFilterBar
