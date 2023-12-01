import styled, { keyframes } from 'styled-components'

interface ShimmerLoadingProps {
  height?: string
  width?: string
  borderRadius?: string
  count?: number
}
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

const ShimmerWrapper = styled.div<ShimmerLoadingProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '2rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 2s infinite;
`

const ShimmerLoading = ({
  height,
  width,
  borderRadius,
  count,
}: ShimmerLoadingProps) => {
  function displayShimmer() {
    const shimmerLoader: React.ReactNode[] = []
    for (let i = 0; i < (count ?? 1); i++) {
      shimmerLoader.push(
        <ShimmerWrapper
          key={i}
          height={height}
          width={width}
          borderRadius={borderRadius}
        />
      )
    }

    return shimmerLoader
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {displayShimmer()}
      {/* <ShimmerWrapper height={height} width={width} borderRadius={borderRadius} /> */}
    </div>
  )
}

export default ShimmerLoading
