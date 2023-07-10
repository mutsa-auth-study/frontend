import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src="/images/logo.png" alt="로고" />
      </Link>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: black;
`

const Logo = styled.img``
