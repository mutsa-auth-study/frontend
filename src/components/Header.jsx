import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../styles/Theme'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { user } from '../store/atom/user'
import useAlert from '../hooks/useAlert'

function Header() {
  const navigate = useNavigate()
  const alert = useAlert()
  const loginUser = useRecoilValue(user)
  const logoutUser = useResetRecoilState(user)

  const [view, setView] = useState(false)

  const goLogin = () => {
    navigate('/login')
  }

  const setMenuView = () => {
    setView(prev => !prev)
  }

  const preventHide = () => {
    // setMenuView가 실행되지 않도록 상태를 한 번 더 전환
    setView(prev => !prev)
  }

  const logout = () => {
    logoutUser()
    alert(true, '정상적으로 로그아웃 되었습니다.')
  }

  return (
    <HeaderContainer>
      <Logo to="/" />
      <Navigation>
        <NavigationItem to="/">지원하기</NavigationItem>
        <NavigationItem to="/community">커뮤니티</NavigationItem>
        {loginUser.name !== '' ? (
          <>
            <UserButtonAfterLogin onMouseEnter={setMenuView}>
              <UserIcon src="/images/userIcon.png" alt="아이콘" />
              <UserButtonText>{loginUser.name}</UserButtonText>
              <MouseHoverMenu onMouseEnter={preventHide} view={view}>
                <Logout onClick={logout}>로그아웃</Logout>
              </MouseHoverMenu>
            </UserButtonAfterLogin>
          </>
        ) : (
          <UserButton onClick={goLogin}>
            <UserIcon src="/images/userIcon.png" alt="아이콘" />
            <UserButtonText>로그인</UserButtonText>
          </UserButton>
        )}
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
  white-space: nowrap;
`

const UserButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

const UserButtonAfterLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  white-space: nowrap;
`

const MouseHoverMenu = styled.div`
  display: ${props => (props.view ? 'block' : 'none')};
  position: absolute;
  width: 100px;
  height: 40px;
  top: 130%;
  right: 11%;
`

const Logout = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${theme.colors.gray};
  border: none;
  color: ${theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`
