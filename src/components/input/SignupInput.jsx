import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/Theme'

export default function SignupInput(props) {
  return (
    <InputRow>
      <Label>{props.labelName}</Label>
      <InputRowContent error={props.errors}>
        <Input
          name={props.name}
          type={props.type}
          placeholder={`${
            props.specificPlaceholder ? props.specificPlaceholder : ''
          }`}
          minLength={props.minLength}
          maxLength={props.maxLength}
          {...props.register(props.name, {
            required: {
              value: props.required,
              message: '조건에 맞게 입력해주세요',
            },
            minLength: {
              value: props.minLength,
              message: '조건에 맞게 입력해주세요',
            },
            pattern: {
              value: props.validPattern,
              message: '조건에 맞게 입력해주세요',
            },
            validate: {
              check: val => {
                if (!props.checkPassword) return
                if (props.checkPassword() !== val) {
                  return '비밀번호가 일치하지 않습니다'
                }
              },
            },
          })}
        />
        {props.checkDuplicate ? (
          <CheckDuplicate type="button" onClick={() => props.checkDuplicate()}>
            중복확인
          </CheckDuplicate>
        ) : null}
      </InputRowContent>
      {props.errors && (
        <ErrorMessage>
          <ErrorIcon />
        </ErrorMessage>
      )}
    </InputRow>
  )
}

const InputRow = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 580px;
  margin-bottom: 20px;
`

const Label = styled.label`
  width: 204px;
  color: ${theme.colors.white};
  line-height: 150%;
  font-size: ${theme.fontSizes.label};
`

const InputRowContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 582px;
  height: 60px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
`

const Input = styled.input`
  width: 100%;
  height: 24px;
  margin: 18px 24px;
  background-color: ${theme.colors.white};
  border: none;
  font-size: ${theme.fontSizes.input};
  &:focus {
    outline: none;
  }
`

const CheckDuplicate = styled.button`
  width: 120px;
  height: 46px;
  margin-top: 7px;
  margin-right: 12px;
  border: none;
  border-radius: 20px;

  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.input};

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const ErrorMessage = styled.span`
  position: absolute;
  top: 20%;
  right: -50px;
  color: ${theme.colors.orange};
  font-weight: 300;
  line-height: 150%;
  font-size: ${theme.fontSizes.label};
  white-space: nowrap;
`

const ErrorIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('/images/warning.png');
`
