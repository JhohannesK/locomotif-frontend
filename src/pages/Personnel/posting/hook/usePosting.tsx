import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { loadFromLocalStorage } from '../../../../redux/hooks/middleware'
import { useContext } from 'react'
import { LayoutContext } from '../../../../_shared/Layout/context/LayoutContext'

const usePosting = () => {
  const postingId = loadFromLocalStorage({
    key: Constants.LOCALSTORAGE_KEYS.POSTINGID,
  })
  const { setDanger } = useContext(LayoutContext)

  const applyForPosting = async (postingId: number) => {
    const response = await axios.post(
      `${Constants.BaseURL}postings/applications/`,
      { posting: postingId }
    )
    const data = await response.data
    return data
  }

  const { mutate } = useMutation({
    mutationKey: ['createPosting', postingId],
    mutationFn: () => applyForPosting(postingId),
    onError: () => {
      setDanger(true)
    },
  })

  return {
    mutate,
  }
}

export default usePosting
