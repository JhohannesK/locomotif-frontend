import React from 'react'
import Sidebar from './sidebar/Sidebar'
import styled from 'styled-components'
import { colors } from '../../../colors'

const PersonnelSteps = [
  {
    title: 'Personnel or Facility',
    subTitle: 'Join us as a Personnel or Facility',
  },
  {
    title: 'Create an account',
    subTitle: 'Create an account to get started',
  },
  {
    title: 'Terms and Conditions',
    subTitle: 'Read and accept our terms and conditions',
  },
  {
    title: 'Create Profile',
    subTitle: 'Provide us with your details',
  },
  {
    title: 'Upload your CV',
    subTitle: 'Upload your CV and other documents',
  },
  {
    title: 'Completed',
    subTitle: 'You are all set',
  },
]

const FacilitySteps = [
  {
    title: 'Personnel or Facility',
    subTitle: 'Join us as a Personnel or Facility',
  },
  {
    title: 'Create an account',
    subTitle: 'Create an account to get started',
  },
  {
    title: 'Terms and Conditions',
    subTitle: 'Read and accept our terms and conditions',
  },
  {
    title: 'Create Profile',
    subTitle: 'Setup your facility profile page',
  },
  {
    title: 'Completed',
    subTitle: 'You are all set',
  },
]

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentRoute = window.location.pathname
  const checkWhichRoute = () => {
    const route = currentRoute.split('/')
    if (route[1] === 'personnel') {
      return PersonnelSteps
    }
    if (route[1] === 'facility') {
      return FacilitySteps
    }
    return []
  }

  const steps = checkWhichRoute()

  return (
    <LayoutStyles>
      <Sidebar steps={steps} />
      <ComponentWrapper>{children}</ComponentWrapper>
    </LayoutStyles>
  )
}

export default Layout

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${colors.background.whiteSmoke};
`
const ComponentWrapper = styled.div`
  width: 100%;
`
