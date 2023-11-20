export type UserAuthType = {
  user_role: {
    user_role: UserAuthState
  }
  isLoading: boolean
  isLoggedIn: boolean
  errorMessage: string | undefined
}

export type UserAuthState = 'facility' | 'personnel'
