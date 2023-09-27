export interface IAuth {
  authResponse: ResponseType
  signInResponse: {
    access_token: string
    refresh_token: string
    user_role: string
  }
}

export type ResponseType = {
  first_name: string
  last_name: string
  other_names: string
  role: 'personnel' | 'facility'
  username: string
  isAuthenticated: boolean
}

export interface AppState {
  activeSidebar: number
}
