const Regex = {
  // 영어와 숫자를 포함한 8~16자리
  id: {
    validPattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
  },
  // 문자,숫자,특수문자 2자리 조합 10자리 이상 또는 3가지 조합 8자리 이상
  password: {
    validPattern:
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}|(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/,
  },
  // 한글 2~5자리
  koreanName: {
    validPattern: /^[가-힣]{2,5}$/,
  },
}

export default Regex
