import { memo } from 'react'
import { type Theme, Box, IconButton, type SxProps } from '@mui/material'

const buttonStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%'
}

interface Props {
  sxButtonProps: SxProps<Theme>
  onClick: React.MouseEventHandler<HTMLButtonElement>
  src: string
  alt: string
  sx?: React.CSSProperties
}

const GameIconButton = ({
  sxButtonProps,
  sx: sxProps = {},
  onClick,
  src,
  alt
}: Props): React.ReactElement => {
  return (
    <Box sx={{ ...buttonStyles, ...sxProps }}>
      <IconButton sx={sxButtonProps} onClick={onClick}>
        <img src={src} alt={alt} />
      </IconButton>
    </Box>
  )
}

export default memo(GameIconButton)
