/* eslint-disable react/no-children-prop */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaut'
import { GlobalStyle } from './global'
import { Router } from './routes/router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
