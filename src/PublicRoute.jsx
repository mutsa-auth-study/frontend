import { Navigate } from 'react-router-dom'
import useAlert from './hooks/useAlert'

// 로그인 한 상태에서 회원가입 접근을 막기 위해 사용
function PublicRoute({ authenticated, component: Component }) {
  const alert = useAlert()

  return !authenticated ? (
    Component
  ) : (
    <Navigate to="/" {...alert(false, '이미 로그인 되었습니다.')} />
  )
}

export default PublicRoute
