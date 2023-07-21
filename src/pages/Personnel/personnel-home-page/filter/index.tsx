import { GenericSelect } from '../../../../_shared'
import {
  FilterContent,
  FilterTitle,
  FilterWrapper,
  Filterheading,
} from './styles'

const FilterPane = () => {
  return (
    <FilterWrapper>
      <FilterTitle>Filter</FilterTitle>
      <FilterContent>
        <Filterheading>Location</Filterheading>
        <GenericSelect
          sx={{ width: '100%' }}
          defaultValue="Airport, Accra"
          data={['Airport, Accra', 'Kumasi', 'Tema', 'Takoradi']}
        />
      </FilterContent>
    </FilterWrapper>
  )
}

export default FilterPane
