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
    // if(filter=="all"){
    //   const newObject:FilterObject = {
    //     ...filterObject,
    //     status:filterTitles,
    //   }
    //   setFilterObject(newObject)
    //   console.log("filter",filterObject)
    // } else {
    const newStatus = filterObject.status.includes(filter)
      ? filterObject.status.filter((already) => already != filter)
      : [...filterObject.status, filter]
    const newObject = {
      ...filterObject,
      status: newStatus,
    }
    setFilterObject(newObject)
    console.log('filter', filterObject)
    // }
  }

  const filterTitles: ('pending' | 'accepted' | 'declined')[] = [
    'accepted',
    'pending',
    'declined',
  ]
  return (
    <FilterWrapper>
      <ButtonsWrapper>
        {/* <GeneralButton onClick={()=> addFilter("all")} title="All" sx={filterObject.status.length!=filterTitles.length?ButtonStyles:AddStyles} /> */}
        {filterTitles.map((title) => (
          <GeneralButton
            onClick={() => addFilter(title)}
            title={title[0].toUpperCase() + title.slice(1)}
            sx={filterObject.status.includes(title) ? AddStyles : ButtonStyles}
          />
        ))}
        {/* <GeneralButton title= sx={ButtonStyles} /> */}
        {/* <GeneralButton title= sx={ButtonStyles} /> */}
      </ButtonsWrapper>
    </FilterWrapper>
  )
}

export default ApplicationFilterBar
