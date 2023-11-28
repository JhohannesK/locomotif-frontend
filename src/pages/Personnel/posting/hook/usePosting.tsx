import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'

const usePosting = () => {
  const personnelId = loadFromLocalStorage({
    key: Constants.LOCALSTORAGE_KEYS.POSTINGID,
  })
  const getPostingByPersonnelId = async (personnelId: number) => {
    const response = await axios.get(
      `${Constants.BaseURL}posting/${personnelId}`
    )
    const data = await response.data
    return data
  }

  const { data, isLoading } = useQuery({
    queryKey: ['posting', personnelId],
    queryFn: () => getPostingByPersonnelId(personnelId),
    enabled: personnelId !== undefined,
  })
  return {
    data,
    isLoading,
  }
}

export default usePosting
