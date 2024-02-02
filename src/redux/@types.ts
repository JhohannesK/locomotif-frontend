export interface IAuth {
  authResponse: ResponseType
  signInResponse: SignInResponse
}

export type ResponseType = {
  first_name: string
  last_name: string
  other_names: string
  role: 'personnel' | 'facility'
  username: string
  isAuthenticated: boolean
}

export type SignInResponse = {
  user_role: string
}

export interface AppState {
  activeSidebar: number
  activeJobPublishingStep: number
}
