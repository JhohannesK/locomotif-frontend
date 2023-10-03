import { zodResolver } from '@hookform/resolvers/zod'
import { ProfileSchema, profileSchema } from '../_types'
import Constants from '../../../../utils/constants'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { setErrorMessages } from '../../../../utils/util'
import { useDispatch } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'

interface FacilityProfilePayload {
  name: string
  email: string
  telephone: string
  bio: string
  digital_address: string
  country: string
  region: string
  city: string
}

interface TransitData {
  name: string
  email: string
  bio: string
  digitaladdress: string
  telephone: string
  country: string
  region: string
  city: string
  password: string
  confirmPassword: string
}

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
      console.log(data)
      await axios.put(`${Constants.BaseURL}auth/profile/`, data)
    },
    onSuccess: () => onHandleClick(4),
    onError: (err) => setErrorMessages(err, setError),
  })

  const onSubmit = (data: TransitData) => {
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
