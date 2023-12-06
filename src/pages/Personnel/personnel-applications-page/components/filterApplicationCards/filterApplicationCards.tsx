import { FilterWrapper } from './styles'

const ApplicationFilterBar = ({ title }: { title: string }) => {
  return (
    <FilterWrapper>
      <h3>{title}</h3>
    </FilterWrapper>
  )
}

export default ApplicationFilterBar
