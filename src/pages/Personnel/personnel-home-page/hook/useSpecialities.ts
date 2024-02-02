import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { SpecialitiesType } from '../../../../_shared/@types'
import Constants from '../../../../utils/constants'

axios.defaults.withCredentials = true

const useSpecialities = () => {
  const fetchSpecialties = async (): Promise<SpecialitiesType> => {
    const response = await axios.get<SpecialitiesType>(
      `${Constants.BaseURL}postings/specialities/`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<SpecialitiesType, Error>({
    queryKey: ['specialities'],
    queryFn: fetchSpecialties,
  })

  return {
    data: data?.specialities,
    isLoading,
  }
}

export default useSpecialities
