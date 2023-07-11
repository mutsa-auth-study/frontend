import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import theme from '../styles/Theme'
import { introductionDesc } from '../constants/Message'

function Main() {
  return (
    <MainContainer>
      <Header />
      <MainContent>
        <Title>
          {`ABOUT `}
          <Accent>MUTSA</Accent>
        </Title>
        <Desc>{introductionDesc}</Desc>
      </MainContent>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('/images/background.png');
  background-blend-mode: overlay;
  background-size: cover;
`

const Title = styled.div`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.introduction_title};
  font-weight: bold;
  margin-bottom: 30px;
`

const Accent = styled.span`
  color: ${theme.colors.orange};
  font-size: ${theme.fontSizes.introduction_title};
  font-weight: bold;
`

const Desc = styled.div`
  width: 98%;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.introduction_desc};
  text-align: center;
  line-height: 40px;
  white-space: pre-line;
`
