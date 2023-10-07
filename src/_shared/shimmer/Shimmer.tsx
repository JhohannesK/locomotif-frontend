import React from 'react'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

const ShimmerWrapper = styled.div`
  width: 40rem;
  height: 90rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 2s infinite;
`

const ShimmerLoading: React.FC = () => {
  return <ShimmerWrapper></ShimmerWrapper>
}

export default ShimmerLoading
