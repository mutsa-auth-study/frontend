import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../styles/Theme'

function Header() {
  const navigate = useNavigate()
  const goLogin = () => {
    navigate('/login')
  }
  return (
    <HeaderContainer>
      <Logo to="/" />
      <Navigation>
        <NavigationItem to="/">지원하기</NavigationItem>
        <NavigationItem to="/community">커뮤니티</NavigationItem>
        <UserButton onClick={goLogin}>
          <UserIcon src="/images/userIcon.png" alt="아이콘" />
          <UserButtonText>로그인</UserButtonText>
        </UserButton>
      </Navigation>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.black};
`

const Logo = styled(Link)`
  width: 190px;
  height: 22px;
  background-image: url('/images/logo.png');
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`

const NavigationItem = styled(Link)`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.navigation};
  text-decoration: none;
`

const UserButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  padding: 8px 12px;
  background-color: ${theme.colors.gray};
  border: none;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`

const UserIcon = styled.img`
  margin-right: 10px;
`

const UserButtonText = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.navigation};
`
