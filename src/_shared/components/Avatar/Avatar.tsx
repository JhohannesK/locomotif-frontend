import { Avatar } from '@mui/material'
import { stringAvatar } from '../../../utils/util'

const AvatarDisplay = ({
  height,
  width,
  imageSrc,
  fullname,
}: {
  height?: number
  width?: number
  imageSrc?: string
  fullname?: string
}) => {
  return (
    <>
      {imageSrc ? (
        <Avatar
          alt={fullname ?? ''}
          src={imageSrc}
          sx={{ height: height ?? 23, width: width ?? 23 }}
        />
      ) : (
        <Avatar
          {...stringAvatar(fullname ?? '')}
          sx={{ height: height ?? 23, width: width ?? 23 }}
        />
      )}
    </>
  )
}

export default AvatarDisplay
