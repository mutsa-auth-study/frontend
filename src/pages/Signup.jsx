import styled from 'styled-components'
import theme from '../styles/Theme'
import Header from '../components/Header'
import { signupMessage } from '../constants/Message'
import SignupInput from '../components/input/SignupInput'
import { useForm } from 'react-hook-form'
import Regex from '../constants/Regex'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }
  const navigate = useNavigate()

  const goMain = () => {
    navigate('/')
  }

  return (
    <LoginContainer>
      <Header />
      <LoginSection>
        <SignupMessage>{signupMessage}</SignupMessage>
        <SignupInputForm onSubmit={handleSubmit(onSubmit)}>
          <SignupInput
            labelName="아이디"
            name="id"
            specificPlaceholder="ID를 입력해주세요"
            required={true}
            checkDuplicate={true}
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
            validPattern={Regex.password.validPattern}
          />
          <SignupInput
            labelName="이름"
            name="koreanName"
            specificPlaceholder="이름을 입력해주세요"
            required={true}
            checkDuplicate={false}
            type="text"
            register={register}
            errors={errors.koreanName}
            minLength={2}
            maxLength={5}
            validPattern={Regex.koreanName.validPattern}
          />
          <ButtonContainer>
            <JoinButton type="button" onClick={goMain}>
              취소
            </JoinButton>
            <LoginButton type="submit">회원가입</LoginButton>
          </ButtonContainer>
        </SignupInputForm>
      </LoginSection>
    </LoginContainer>
  )
}

export default Signup

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

const SignupMessage = styled.div`
  width: 450px;
  margin-bottom: 30px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.welcome_title};
  font-weight: bold;
  line-height: 45px;
  white-space: pre-line;
  text-align: start;
`

const SignupInputForm = styled.form`
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
