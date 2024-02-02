import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { ShiftTypesType } from '../../../../_shared/@types'
import Constants from '../../../../utils/constants'

axios.defaults.withCredentials = true

const useShiftType = () => {
  const fetchShiftTypes = async (): Promise<ShiftTypesType> => {
    const response = await axios
      .get<ShiftTypesType>(`${Constants.BaseURL}postings/shift_types/`)
      .then((res: AxiosResponse<ShiftTypesType>) => res.data)
    return response
  }

  const { data, isLoading } = useQuery<ShiftTypesType, Error>({
    queryKey: ['ShiftType'],
    queryFn: fetchShiftTypes,
  })

  return {
    data: data?.shift_types,
    isLoading,
  }
}

export default useShiftType
