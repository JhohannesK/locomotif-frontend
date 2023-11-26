import { useQuery } from '@tanstack/react-query'
// import Constants from '../../../../utils/constants'
import axios from 'axios'
import { SpecialitiesType } from '../../../../_shared/@types'
// import postingData from '../../../mocks/postings.json'
import Constants from '../../../../utils/constants'

axios.defaults.withCredentials = true

const useFilter = () => {
  const fetchSpecialties = async (): Promise<SpecialitiesType> => {
    const response = await axios.get<SpecialitiesType>(
      `${Constants.BaseURL}postings/specialities/`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<SpecialitiesType, Error>(
    ['specialities'],
    fetchSpecialties
  )

  return {
    data: data?.specialities,
    isLoading,
  }
}

export default useFilter
