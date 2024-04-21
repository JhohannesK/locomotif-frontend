import { zodResolver } from '@hookform/resolvers/zod'
import { FacilityProfilePayload, ITransitData } from '../../_types'
import Constants from '../../../../utils/constants'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { setErrorMessages } from '../../../../utils/util'
import { useDispatch } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import { ProfileSchema, profileSchema } from '../schema/validation'

const useFacilityProfileSetup = () => {
  const [error, setError] = useState<string>('')

  const dispatch = useDispatch()

  const onHandleClick = (index: number) => {
    dispatch(setActiveSidebar({ activeSidebar: index }))
  }

  const defaultValues: ProfileSchema = {
    bio: '',
    digitaladdress: '',
    telephone: '',
    country: '',
    region: '',
    city: '',
  }

  const methods = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  })

  const mutation = useMutation({
    mutationFn: async (data: FacilityProfilePayload) => {
      await axios.put(`${Constants.BaseURL}auth/profile/`, data)
    },
    onSuccess: () => onHandleClick(4),
    onError: (err) => setErrorMessages(err, setError),
  })

  const onSubmit = (data: ITransitData) => {
    const payload: FacilityProfilePayload = {
      email: data.email,
      name: data.name,
      bio: data.bio,
      telephone: data.telephone,
      country: data.country,
      region: data.region,
      city: data.city,
      digital_address: data.digitaladdress,
    }
    mutation.mutate(payload)
  }

  return { onSubmit, mutation, methods, error }
}

export default useFacilityProfileSetup
