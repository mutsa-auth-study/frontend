import React from 'react'
import styled from 'styled-components'
import theme from '../styles/Theme'
import Header from '../components/Header'

function Community() {
  return (
    <CommunityContainer>
      <Header />
      <CommunitySection>커뮤니티 구현</CommunitySection>
    </CommunityContainer>
  )
}

export default Community

const CommunityContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.black};
`

const CommunitySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
`
