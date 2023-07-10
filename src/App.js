import React from 'react'
import Router from './routes'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './styles/Theme'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export default App
