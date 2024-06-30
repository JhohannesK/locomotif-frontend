// import App from '@/App'
import SignIn from '@/container/auth/shared/signin/Signin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: SigninComponent,
})

function SigninComponent() {
  return <SignIn />
}
