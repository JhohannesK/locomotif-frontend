import { Chip } from '@mui/material'
import { colors } from '../../../../colors'

const Tag = ({ label, icon }: { label: string; icon?: JSX.Element }) => {
  return (
    <Chip
      icon={icon}
      size="small"
      sx={{ background: colors.background.whiteSmoke }}
      label={label}
    />
  )
}

export default Tag
