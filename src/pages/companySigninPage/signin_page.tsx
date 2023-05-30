import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'

import {
  SignInPageContainer,
  SignInPageContent,
  SignInPageTitle,
  SignInPageFields,
  SignInPageText,
  SignInPageButton,
} from './signin_page_styles'
import GeneralInput from '../../general/Input'
import GeneralButton from '../../general/Button'

const SignInPage = () => {
  return (
    <SignInPageContainer>
      <SignInPageContent>
        <SignInPageTitle>Sign Up</SignInPageTitle>
        <SignInPageFields>
          <GeneralInput
            label="First Name"
            icon={<AiOutlineUser />}
            placeholder="Sister Akos"
          />
          <GeneralInput
            label="Last Name"
            icon={<AiOutlineUser />}
            placeholder="Sister Akos"
          />
          <GeneralInput
            label="E-mail"
            icon={<AiOutlineUser />}
            placeholder="mardar@ewiase.com"
          />
          <GeneralInput
            label="Password"
            icon={<FiKey />}
            placeholder="*********"
          />
        </SignInPageFields>
        <SignInPageButton>
          <GeneralButton title="Sign Up" />
        </SignInPageButton>
        <SignInPageText>
          Already have an account ? <a href="#">Sign In</a>
        </SignInPageText>
      </SignInPageContent>
    </SignInPageContainer>
  )
}

export default SignInPage
