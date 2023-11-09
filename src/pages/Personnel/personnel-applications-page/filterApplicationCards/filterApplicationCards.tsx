import GeneralButton from '../../../../_shared/components/button/Button'
import { FilterObject, StatusType } from '../applicationsPage/@types'
import {
  AddStyles,
  ButtonStyles,
  ButtonsWrapper,
  FilterWrapper,
} from './styles'

const ApplicationFilterBar = ({
  filterObject,
  setFilterObject,
}: {
  filterObject: FilterObject
  setFilterObject: (x: FilterObject) => void
}) => {
  const addFilter = (filter: StatusType) => {
    const newStatus = filterObject.status.includes(filter)
      ? filterObject.status.filter((already) => already != filter)
      : [...filterObject.status, filter]
    const newObject = {
      ...filterObject,
      status: newStatus,
    }
    setFilterObject(newObject)
  }

  const filterTitles: readonly ('pending' | 'accepted' | 'declined')[] = [
    'accepted',
    'pending',
    'declined',
  ]
  return (
    <FilterWrapper>
      <ButtonsWrapper>
        {filterTitles.map((title) => (
          <GeneralButton
            onClick={() => addFilter(title)}
            title={title[0].toUpperCase() + title.slice(1)}
            sx={filterObject.status.includes(title) ? AddStyles : ButtonStyles}
          />
        ))}
      </ButtonsWrapper>
    </FilterWrapper>
  )
}

export default ApplicationFilterBar
