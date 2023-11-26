import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { PostingCardType } from '../../@types'

axios.defaults.withCredentials = true

const usePersonnel = (URL: string) => {
  const fetchPostings = async (): Promise<PostingCardType[]> => {
    const response = await axios.get<PostingCardType[]>(
      `${Constants.BaseURL}${URL}`
    )
    console.log(
      '🚀 ~ file: usePersonnel.ts:13 ~ fetchPostings ~ response:',
      response.data
    )
    return response.data
  }

  const { data, isLoading } = useQuery<PostingCardType[], Error>({
    queryKey: ['postings', URL],
    queryFn: fetchPostings,
    notifyOnChangeProps: ['data'],
  })
  console.log(URL)

  return {
    data,
    isLoading,
  }
}

export default usePersonnel
