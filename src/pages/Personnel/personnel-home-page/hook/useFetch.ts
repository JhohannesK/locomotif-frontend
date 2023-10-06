import { useQuery } from '@tanstack/react-query'
import { JobCardProps } from '../../../../_shared/@types'
import Constants from '../../../../utils/constants'
import axios from 'axios'

axios.defaults.withCredentials = true

const useFetch = () => {
  const fetchPostings = async (): Promise<JobCardProps[]> => {
    const response = await axios.get<JobCardProps[]>(
      `${Constants.BaseURL}auth/profile/`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<JobCardProps[], Error>(
    ['postings'],
    fetchPostings
  )
  console.log(data)

  return {
    data,
    isLoading,
  }
}

export default useFetch
