import { Box, Icon, Typography, Stack } from '@mui/material'
import Image from 'next/image'
import getSignalIconByVolatility from '../../utils/getSignalIconByVolatility'

const signalIconStyles = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  pb: '4px',
  justifyContent: 'end'
}

interface Props {
  rtp: number
  volatility: number
  name: string
}

const GameDescription = ({
  rtp,
  volatility,
  name
}: Props): React.ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      mb={7}
      p={1}>
      <Typography>{name}</Typography>
      <Stack direction="row">
        <Typography>{`${Math.floor(rtp)}%`}</Typography>
        <Icon sx={signalIconStyles}>
          <Image
            width={15}
            height={16}
            src={getSignalIconByVolatility(volatility)}
            sizes="100vw"
            alt="signal"
          />
        </Icon>
      </Stack>
    </Box>
  )
}

export default GameDescription
