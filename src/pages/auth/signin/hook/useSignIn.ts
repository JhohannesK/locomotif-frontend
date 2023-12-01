import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

axios.defaults.withCredentials = true

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(3).max(100),
})

export type PersonnelLoginSchema = z.infer<typeof schema>

const useSignIn = () => {
  const defaultValues: PersonnelLoginSchema = {
    email: '',
    password: '',
  }

  const methods = useForm<PersonnelLoginSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return { methods }
}

export default useSignIn
