import React, { Suspense } from 'react'
import { ThemeProvider, ThemeProviderProps } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import { useRoutes } from 'react-router-dom'
import GlobalStyles from 'src/components/GlobalStyles'
import 'src/mixins/chartjs'
import routes from 'src/routes'
import theme from 'src/theme'
import Loadding from './components/Loading'
import 'react-perfect-scrollbar/dist/css/styles.css'

function App(): React.ReactElement<ThemeProviderProps> {
  const routing = useRoutes(routes)

  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<Loadding />}>{routing}</Suspense>
      </ThemeProvider>
    </SnackbarProvider>
  )
}

export default App
