import { render, screen, waitFor } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home', () => {
  it('renders game', async () => {
    render(
      <Home
        games={[
          {
            name: 'Beast Mode',
            id: 'beastmode',
            studio: 'Relax Gaming',
            rtp: 97.0,
            volatility: 5,
            stats: {
              bets: 24890,
              games: 639,
              maxWin: 2400
            }
          }
        ]}
        studios={['Relax Gaming']}
      />
    )

    await waitFor(() => {
      expect(screen.getByText(/Beast Mode/i)).toBeInTheDocument()
      expect(screen.getByText(/97/i)).toBeInTheDocument()
    })
  })
})
