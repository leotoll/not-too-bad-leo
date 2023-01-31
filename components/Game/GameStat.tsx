import { Stack, Typography } from '@mui/material'

interface Props {
  title: string
  value: string | number
}

const statsStyles = {
  fontWeight: 500,
  fontSize: '10px',
  lineHeight: '12px'
}

const GameStat = ({ title, value }: Props): React.ReactElement => {
  return (
    <Stack pb="6px" justifyContent="space-between" direction="row">
      <Typography sx={statsStyles}>{title}</Typography>
      <Typography sx={statsStyles}>{value}</Typography>
    </Stack>
  )
}

export default GameStat
