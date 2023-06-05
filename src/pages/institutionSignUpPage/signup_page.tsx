import { AiOutlineUser } from 'react-icons/ai'
import { FiKey } from 'react-icons/fi'

import {
  SignUpPageContainer,
  SignUpPageContent,
  SignUpPageTitle,
  SignUpPageFields,
  SignUpPageText,
  SignUpPageButton,
} from './signup_page_styles'
import GeneralInput from '../../general/Input'
import GeneralButton from '../../general/Button'

const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <SignUpPageContent>
        <SignUpPageTitle>Sign Up</SignUpPageTitle>
        <SignUpPageFields>
          <GeneralInput
            label="Facility Code"
            icon={<AiOutlineUser />}
            placeholder="KBTH123"
          />
          <GeneralInput
            label="Name"
            icon={<AiOutlineUser />}
            placeholder="Korle-Bu Teaching Hospital"
          />
          <GeneralInput
            label="Address"
            icon={<AiOutlineUser />}
            placeholder="GA-159-343"
          />
          <GeneralInput
            label="Estblishment Date"
            icon={<FiKey />}
            placeholder="01/06/2023"
          />
        </SignUpPageFields>
        <SignUpPageButton>
          <GeneralButton title="Sign Up" />
        </SignUpPageButton>
        <SignUpPageText>
          Already have an account ? <a href="#">Sign In</a>
        </SignUpPageText>
      </SignUpPageContent>
    </SignUpPageContainer>
  )
}

export default SignUpPage
