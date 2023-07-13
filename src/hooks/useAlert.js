import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import theme from '../styles/Theme'
import '../styles/css/sweetalert2.css'

const useAlert = () => {
  const alert = (status, message) => {
    const mySwal = withReactContent(Swal)

    mySwal.fire({
      title: <Title>{message}</Title>,
      icon: status ? 'success' : 'error',
      background: theme.colors.white,
      confirmButtonColor: theme.colors.orange,
      confirmButtonText: <ConfirmText>{`ok`}</ConfirmText>,
      customClass: {
        icon: 'custom-icon-class',
      },
    })
  }

  return alert
}

const Title = styled.div`
  margin: 120px 0 20px 0;
  color: ${theme.colors.black};

  font-weight: 600;
  line-height: 160%;
  white-space: pre-line;
`

const ConfirmText = styled.div`
  font-size: ${theme.fontSizes.label};
  color: ${theme.colors.white};

  font-weight: 600;
`

export default useAlert
