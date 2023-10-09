import { useQuery } from '@tanstack/react-query'
import Constants from '../../../../utils/constants'
import axios from 'axios'
import { JobCardType } from '../../../../_shared/@types'

axios.defaults.withCredentials = true

const useFetch = () => {
  const fetchPostings = async (): Promise<JobCardType[]> => {
    const response = await axios.get<JobCardType[]>(
      `${Constants.BaseURL}auth/profile/`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<JobCardType[], Error>(
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
