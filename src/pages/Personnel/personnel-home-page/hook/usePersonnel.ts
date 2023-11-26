import { useQuery } from '@tanstack/react-query'
// import Constants from '../../../../utils/constants'
import axios from 'axios'
import { JobCardType } from '../../../../_shared/@types'
// import postingData from '../../../mocks/postings.json'
import Constants from '../../../../utils/constants'

axios.defaults.withCredentials = true

/**
 * @param URL {string} All postings URL(endpoint)
 */
const usePersonnel = (URL: string) => {
  const fetchPostings = async (): Promise<JobCardType[]> => {
    const response = await axios.get<JobCardType[]>(
      `${Constants.BaseURL}${URL}`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<JobCardType[], Error>(
    ['postings'],
    fetchPostings
  )
  console.log(URL)

  return {
    data,
    isLoading,
  }
}

export default usePersonnel
