import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, type EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { type AppProps } from 'next/app'
import theme from '../styles/theme'
import createEmotionCache from '../utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface Props extends AppProps {
  emotionCache?: EmotionCache
}

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: Props): React.ReactElement => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Game list test</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
