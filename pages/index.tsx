import { useState } from 'react'
import Head from 'next/head'
import data from '../data.json'
import { type GetStaticProps } from 'next'
import { Grid, Box } from '@mui/material'
import { Game, Search } from '../components'

export interface GameData {
  id: string
  name: string
  studio: string
  rtp: number
  volatility: number
  stats: {
    bets: number
    games: number
    maxWin: number
  }
}

export interface HomeProps {
  games: GameData[]
  studios: string[]
}
const Home = ({ games: initialGames, studios }: HomeProps): React.ReactElement => {
  const [games, setGames] = useState<GameData[]>(initialGames)

  return (
    <>
      <Head>
        <title>Not too bad test</title>
      </Head>
      <Box px={4} py={6}>
        <Box maxWidth="sm">
          <Search
            initialGames={initialGames}
            setGames={setGames}
            studios={studios}
          />
        </Box>

        <Grid container pt={9} spacing={1}>
          {games.map((game: GameData) => (
            <Grid item lg={2} md={4} sm={6} xs={12} key={game.id}>
              <Game game={game} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = () => {
  const games = data.games
  const studios = games.map(({ studio }) => studio)
  const uniqStudios = [...new Set(studios)]

  return {
    props: {
      games,
      studios: uniqStudios
    }
  }
}
