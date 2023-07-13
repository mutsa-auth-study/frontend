import styled from 'styled-components'
import theme from '../styles/Theme'
import Header from '../components/Header'
import { signupMessage } from '../constants/Message'
import SignupInput from '../components/input/SignupInput'
import { useForm } from 'react-hook-form'
import Regex from '../constants/Regex'
import { useNavigate } from 'react-router-dom'
import { request } from '../util/axios'
import useAlert from '../hooks/useAlert'
import { useEffect, useState } from 'react'

function Signup() {
  const alert = useAlert()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm()

  const [idChecked, setIdChecked] = useState(false)
  const inputId = watch('id')

  const checkDuplicate = async () => {
    if (inputId.trim() === '') return
    try {
      const response = await request(
        'post',
        `/signup/checkduplicate`,
        { id: inputId },
        null
      )
      if (response.status === 200) {
        alert(true, response.data)
        setIdChecked(true)
      }
    } catch (error) {
      alert(false, error.response.data)
    }
  }

  useEffect(() => {
    setIdChecked(false)
  }, [inputId])

  const onSubmit = async data => {
    // 중복체크를 하지 않은 경우
    if (!idChecked) {
      alert(false, '아이디 중복체크를 해주세요')
      return
    }

    const { id, password, koreanName } = data
    try {
      const response = await request(
        'post',
        '/signup',
        { id, password, name: koreanName },
        null
      )
      console.log(response)
    } catch (error) {
      alert(false, error.response.data)
    }
  }

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
            checkDuplicate={checkDuplicate}
            checkPassword={false}
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
            checkPassword={false}
            type="password"
            register={register}
            errors={errors.password}
            minLength={8}
            validPattern={Regex.password.validPattern}
          />
          <SignupInput
            labelName="비밀번호 확인"
            name="checkpassword"
            specificPlaceholder="같은 비밀번호를 입력해주세요"
            required={true}
            checkDuplicate={false}
            checkPassword={() => getValues('password')}
            type="password"
            register={register}
            errors={errors.checkpassword}
            minLength={8}
            validPattern={Regex.password.validPattern}
          />
          <SignupInput
            labelName="이름"
            name="koreanName"
            specificPlaceholder="이름을 입력해주세요"
            required={true}
            checkDuplicate={false}
            checkPassword={false}
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
