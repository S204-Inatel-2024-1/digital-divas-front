/* eslint-disable react/no-children-prop */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaut'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/router'
import { BrowserRouter } from 'react-router-dom'
import { UserLoggedProvider } from './contexts/UserLoggedContext'
import { UserProvider } from './contexts/UserContext'
import { ProjectProvider } from './contexts/ProjectContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserLoggedProvider>
          <ProjectProvider>
            <UserProvider>
              <Router />
            </UserProvider>
          </ProjectProvider>
        </UserLoggedProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
