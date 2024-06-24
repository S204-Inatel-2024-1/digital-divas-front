/* eslint-disable react/no-children-prop */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaut'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/router'
import { BrowserRouter } from 'react-router-dom'
import { UserLoggedProvider } from './contexts/UserLoggedContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserLoggedProvider>
          <Router />
        </UserLoggedProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
