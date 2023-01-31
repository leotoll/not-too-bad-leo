import { useState } from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CircularProgress,
  type SxProps
} from '@mui/material'
import Image from 'next/image'
import GameIconButton from './GameIconButton'
import GameStats from './GameStats'

interface Props {
  id: string
  name: string
  stats: {
    bets: number
    games: number
    maxWin: number
  }
}

const imageContainerStyles = {
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '50%'
}

const loaderStyles = {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const getBackgroundStyles = (showDetails: boolean): SxProps => ({
  background: showDetails ? 'rgba(3, 0, 0, 0.3)' : 'none',
  backdropFilter: showDetails ? 'blur(3px)' : 'none',
  boxShadow: showDetails ? 'inset 0px 30px 10px rgba(0, 0, 0, 0.25)' : 'none',
  position: 'absolute',
  height: '100%',
  width: '100%'
})

const GameCard = ({ id, name, stats }: Props): React.ReactElement => {
  const [loading, setLoading] = useState<boolean>(true)
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [showStats, setShowStats] = useState<boolean>(false)

  const showPlayButton = showDetails && !showStats

  return (
    <Card sx={{ display: 'relative' }}>
      <CardActionArea
        component="div"
        onMouseOver={() => {
          setShowDetails(true)
        }}
        onMouseLeave={() => {
          setShowDetails(false)
          setShowStats(false)
        }}>
        <Box sx={imageContainerStyles}>
          <Image
            src={`/images/${id}.jpeg`}
            fill
            alt={name}
            sizes="100vw"
            onLoad={() => {
              setLoading(false)
            }}
          />

          <Box sx={getBackgroundStyles(showDetails)}>
            {loading && (
              <Box sx={loaderStyles}>
                <CircularProgress />
              </Box>
            )}
          </Box>

          <GameIconButton
            sx={{
              textAlign: 'end'
            }}
            sxButtonProps={{ pr: '10px', pt: '10px', zIndex: 1 }}
            onClick={() => {
              setShowStats((showStats: boolean) => !showStats)
            }}
            src="/icons/stats.svg"
            alt="stats"
          />

          {showPlayButton && (
            <GameIconButton
              sxButtonProps={{ p: 0, width: '100%', height: '100%' }}
              onClick={() => {
                console.log(`Play: ${name}`)
              }}
              src="/icons/play.svg"
              alt="play"
            />
          )}

          {showStats && <GameStats {...stats} />}
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default GameCard
