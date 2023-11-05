import { useQuery } from '@tanstack/react-query'
// import Constants from '../../../../utils/constants'
import axios from 'axios'
import { JobCardType } from '../../../../_shared/@types'
import postingData from '../../../mocks/postings.json'

axios.defaults.withCredentials = true

const usePersonnel = () => {
  const fetchPostings = async (): Promise<JobCardType[]> => {
    // const response = await axios.get<JobCardType[]>(
    //   `${Constants.BaseURL}auth/profile/`
    // )
    // return response.data
    return postingData.postings
  }

  const { data, isLoading } = useQuery<JobCardType[], Error>(
    ['postings'],
    fetchPostings
  )

  return {
    data,
    isLoading,
  }
}

export default usePersonnel
