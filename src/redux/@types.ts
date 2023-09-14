export interface IAuth {
  authResponse: ResponseType
}

export type ResponseType = {
  first_name: string
  last_name: string
  other_names: string
  role: 'personnel' | 'facility'
  username: string
  isAuthtneticated: boolean
}
