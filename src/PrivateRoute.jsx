import { Navigate } from 'react-router-dom'
import useAlert from './hooks/useAlert'

function PrivateRoute({ authenticated, component: Component }) {
  const alert = useAlert()

  return authenticated ? (
    Component
  ) : (
    <Navigate to="/login" {...alert(false, '로그인을 먼저 해주세요.')} />
  )
}

export default PrivateRoute
