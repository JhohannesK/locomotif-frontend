import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { PostingCardType } from '../../@types'
import { useDispatch } from 'react-redux'
import { fetchPersonnelProfile } from '../../../auth/slice/authSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../../../../redux/store'

axios.defaults.withCredentials = true

const usePersonnel = (URL: string) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>()

  const fetchPostings = async (): Promise<PostingCardType[]> => {
    const response = await axios.get<PostingCardType[]>(
      `${Constants.BaseURL}${URL}`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<PostingCardType[], Error>({
    queryKey: ['postings', URL],
    queryFn: fetchPostings,
    notifyOnChangeProps: ['data'],
  })
  const fetchProfile = () => {
    dispatch(fetchPersonnelProfile())
  }

  return {
    data,
    isLoading,
    fetchProfile,
  }
}

export default usePersonnel
