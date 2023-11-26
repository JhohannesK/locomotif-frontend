import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { PostingCardType } from '../../@types'

axios.defaults.withCredentials = true

const usePersonnel = () => {
  const fetchPostings = async (): Promise<PostingCardType[]> => {
    const response = await axios.get<PostingCardType[]>(
      `${Constants.BaseURL}postings/`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<PostingCardType[], Error>(
    ['postings'],
    fetchPostings
  )

  return {
    data,
    isLoading,
  }
}

export default usePersonnel
