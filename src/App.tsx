import SignIn from './pages/auth/signin/Signin'
import { SetupInterceptor } from './utils/lib/SetupInterceptor'

function App() {
  return (
    <SetupInterceptor>
      <div className="h-screen">
        <SignIn />
      </div>
    </SetupInterceptor>
  )
}

export default App
