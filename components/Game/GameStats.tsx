import { Box, Typography } from '@mui/material'
import GameStat from './GameStat'

interface Props {
  bets: number
  games: number
  maxWin: number
}

const statsStyles = {
  display: 'flex',
  color: 'common.white',
  position: 'absolute',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  px: '10px'
}

const GameStats = ({
  bets,
  games,
  maxWin
}: Props): React.ReactElement => {
  return (
    <Box sx={statsStyles}>
      <Typography
        py="14px"
        sx={{ fontWeight: 500, fontSize: '10px', lineHeight: '12px' }}>
        Statistics
      </Typography>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }}>
        <GameStat title="Bets made" value={`${bets} USD`} />
        <GameStat title="Games played" value={games} />
        <GameStat title="Biggest win " value={`${maxWin} USD`} />
      </Box>
    </Box>
  )
}

export default GameStats
