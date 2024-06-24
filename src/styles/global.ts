import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue_100};
  }

  body {
    background-color: ${(props) => props.theme.neutral_00};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`
