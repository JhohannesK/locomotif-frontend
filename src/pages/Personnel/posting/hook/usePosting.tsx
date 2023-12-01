import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'

const usePosting = () => {
  const postingId = loadFromLocalStorage({
    key: Constants.LOCALSTORAGE_KEYS.POSTINGID,
  })
  const getPostingByPostingId = async (postingId: number) => {
    const response = await axios.get(
      `${Constants.BaseURL}postings/${postingId}`
    )
    const data = await response.data
    return data
  }

  const { data, isLoading } = useQuery({
    queryKey: ['posting', postingId],
    queryFn: () => getPostingByPostingId(postingId),
    enabled: postingId !== undefined,
  })
  return {
    data,
    isLoading,
  }
}

export default usePosting
