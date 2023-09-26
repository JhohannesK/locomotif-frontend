import React from 'react'
import Sidebar from './sidebar/Sidebar'
import styled from 'styled-components'
import { colors } from '../../../colors'

const PersonnelSteps = [
  'Personnel/Facility ',
  'Create an account',
  'Terms and Conditions',
  'Create Profile',
  'Upload your CV',
  'Completed',
]

const FacilitySteps = [
  'Facility',
  'Create an account',
  'Terms and Conditions',
  'Completed',
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
  gap: 20%;
  background-color: ${colors.background.whiteSmoke};
`
const ComponentWrapper = styled.div`
  width: 60%;
`
