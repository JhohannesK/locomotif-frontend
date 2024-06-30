import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { setErrorMessages } from '../../../../utils/util'
import { useDispatch } from 'react-redux'
import { setActiveSidebar } from '../../../../redux/slices/appSlice'
import {
  IPersonnelProfileData,
  IPersonnelProfilePayload,
  PersonnelSpecialities,
} from '../../types'
// import { useNavigate } from '@tanstack/react-router'

axios.defaults.withCredentials = true

const schema = z.object({
  specialities: z.array(z.string().min(3).optional()),
  year_of_registration: z
    .number()
    .positive()
    .gt(1950)
    .lte(new Date().getFullYear())
    .optional(),
  telephone: z.string().optional(),
  date_of_birth: z.string().optional(),
  country: z.string().min(2).max(100).optional(),
  region: z.string().min(2).max(100).optional(),
  city: z.string().min(2).max(100).optional(),
  digital_address: z.string().min(2).max(15).optional(),
})

type Schema = z.infer<typeof schema>

const useProfileSetup = () => {
  const [error, setError] = useState<string>('')

  const defaultValues: Schema = {
    specialities: [],
    year_of_registration: 2023,
    telephone: '',
    date_of_birth: '',
    country: '',
    region: '',
    city: '',
    digital_address: '',
  }

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const dispatch = useDispatch()

  const onHandleClick = (index: number) => {
    dispatch(setActiveSidebar({ activeSidebar: index }))
  }

  const fetchSpecialitiesMutation = useQuery<PersonnelSpecialities>({
    queryKey: ['specialities'],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `${Constants.BaseURL}postings/specialities/`
        )
        return data
      } catch (error) {
        return error
      }
    },
  })

  const mutation = useMutation({
    mutationFn: async (data: IPersonnelProfilePayload) => {
      await axios.put(`${Constants.BaseURL}auth/profile/`, data)
    },
    onSuccess: () => onHandleClick(4),
    onError: (err) => setErrorMessages(err, setError),
  })

  const onSubmit = (data: IPersonnelProfileData) => {
    // const payload: IPersonnelProfilePayload = {
    //   specialities: data.specialities,
    //   year_of_registration: data.year_of_registration,
    //   telephone: data.telephone,
    //   date_of_birth: data.date_of_birth,
    //   country: data.country,
    //   region: data.region,
    //   city: data.city,
    //   digital_address: data.digital_address,
    // }
    mutation.mutate(data)
  }

  return { onSubmit, mutation, methods, error, fetchSpecialitiesMutation }
}

export default useProfileSetup
