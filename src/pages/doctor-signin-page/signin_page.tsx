import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'
import {
  SignInPageButton,
  SignInPageContainer,
  SignInPageContent,
  SignInPageFields,
  SignInPageLogo,
  SignInPageText,
  SignInPageUpperContent,
} from './signin_page_styles'
import { colors } from '../../colors'
import image from '../../assets/doctor_sign_in.png'
import GeneralInput from '../../general/Input'
import GeneralButton from '../../general/Button'

function SiginPage() {
  return (
    <SignInPageContainer>
      <SignInPageContent>
        <SignInPageUpperContent>
          <SignInPageLogo>
            <img
              src={image}
              alt="health-leaf icon"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </SignInPageLogo>

          <h1 style={{ fontWeight: 650, fontSize: '2rem' }}>Sign In</h1>
        </SignInPageUpperContent>
        <div>
          <SignInPageFields>
            <GeneralInput
              sx={{ marginBottom: '20px' }}
              label="Username"
              icon={<AiOutlineUser />}
              placeholder="Username"
            />
            <GeneralInput
              sx={{ marginBottom: '20px' }}
              label="Password"
              icon={<FiKey />}
              placeholder="Password"
              type="password"
            />
          </SignInPageFields>
        </div>
        <SignInPageText>
          <p>Forgot your password?</p>
        </SignInPageText>
        <SignInPageButton>
          <GeneralButton
            sx={{ backgroundColor: colors.button.pineGreen, width: '100%' }}
            title="Sign In"
          />
        </SignInPageButton>
      </SignInPageContent>
    </SignInPageContainer>
  )
}

export default SiginPage
