import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`
