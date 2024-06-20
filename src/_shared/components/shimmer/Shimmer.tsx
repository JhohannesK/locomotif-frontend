interface ShimmerLoadingProps {
  height?: string
  width?: string
  borderradius?: string
  count?: number
}

const ShimmerLoading = ({
  // height,
  // width,
  // borderradius,
  count,
}: ShimmerLoadingProps) => {
  function displayShimmer() {
    const shimmerLoader: React.ReactNode[] = []
    for (let i = 0; i < (count ?? 1); i++) {
      shimmerLoader.push(
        <div
          key={i}
          // height={height}
          // width={width}
          // borderradius={borderradius}
        />
      )
    }

    return shimmerLoader
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
      }}
    >
      {displayShimmer()}
    </div>
  )
}

export default ShimmerLoading
