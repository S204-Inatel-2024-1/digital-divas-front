/* eslint-disable react/no-children-prop */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaut'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/router'
import { BrowserRouter } from 'react-router-dom'
import { UserLoggedProvider } from './contexts/UserLoggedContext'
import { UserProvider } from './contexts/UserContext'
import { ProjectProvider } from './contexts/ProjectContext'
import { StageContextProvider } from './contexts/StageContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <StageContextProvider>
          <UserLoggedProvider>
            <UserProvider>
              <ProjectProvider>
                <Router />
              </ProjectProvider>
            </UserProvider>
          </UserLoggedProvider>
        </StageContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
