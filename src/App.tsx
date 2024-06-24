/* eslint-disable react/no-children-prop */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaut'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/router'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
