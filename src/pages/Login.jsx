import React from 'react'
import styled from 'styled-components'
import theme from '../styles/Theme'
import Header from '../components/Header'
import SignupInput from '../components/input/SignupInput'
import { useForm } from 'react-hook-form'
import { followMessage, welcomeMessage } from './../constants/Message'
import Regex from '../constants/Regex'
import { useNavigate } from 'react-router-dom'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  const navigate = useNavigate()

  const goSignup = () => {
    navigate('/signup')
  }
  return (
    <LoginContainer>
      <Header />
      <LoginSection>
        <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
        <FollowMessage>{followMessage}</FollowMessage>
        <LoginInputForm onSubmit={handleSubmit(onSubmit)}>
          <SignupInput
            labelName="아이디"
            name="id"
            specificPlaceholder="ID를 입력해주세요"
            required={true}
            checkDuplicate={false}
            type="text"
            register={register}
            errors={errors.id}
            minLength={8}
            maxLength={16}
            validPattern={Regex.id.validPattern}
          />
          <SignupInput
            labelName="비밀번호"
            name="password"
            specificPlaceholder="비밀번호를 입력해주세요"
            required={true}
            checkDuplicate={false}
            type="password"
            register={register}
            errors={errors.password}
            minLength={8}
            maxLength={16}
            validPattern={Regex.password.validPattern}
          />
          <ButtonContainer>
            <JoinButton type="button" onClick={goSignup}>
              회원가입
            </JoinButton>
            <LoginButton type="submit" onClick={onSubmit}>
              로그인
            </LoginButton>
            <InduceJoinMent>회원이 아니라면</InduceJoinMent>
          </ButtonContainer>
        </LoginInputForm>
      </LoginSection>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${theme.colors.black};
`

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WelcomeMessage = styled.div`
  width: 300px;
  margin-bottom: 16px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.welcome_title};
  font-weight: bold;
  line-height: 45px;
  white-space: pre-line;
  text-align: start;
`

const FollowMessage = styled.div`
  width: 300px;
  margin-bottom: 50px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.profile};
  text-align: start;
`

const LoginInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 786px;
  margin: 0 auto;
`

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  width: 580px;
  margin-top: 74px;
  margin-bottom: 210px;
  justify-content: space-between;
`

const InduceJoinMent = styled.span`
  position: absolute;
  top: -30px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.input};
`

const JoinButton = styled.button`
  flex: 1;
  height: 60px;
  margin-right: 30px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  border: none;
  border-radius: 20px;
  font-size: ${theme.fontSizes.label};
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const LoginButton = styled.button`
  flex: 3;
  height: 60px;
  background-color: ${theme.colors.orange};
  color: ${theme.colors.white};
  border: none;
  border-radius: 20px;
  font-size: ${theme.fontSizes.label};
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
