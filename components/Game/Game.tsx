import { type GameData } from '../../pages'
import GameCard from './GameCard'
import GameDescription from './GameDescription'

interface Props {
  game: GameData
}

const Game = ({ game }: Props): React.ReactElement => (
    <>
      <GameCard {...game} />
      <GameDescription {...game} />
    </>
)

export default Game
