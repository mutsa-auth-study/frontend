import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Community from './pages/Community'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

import { useRecoilValue } from 'recoil'
import { user } from './store/atom/user'

function Router() {
  const isLogin = useRecoilValue(user).accessToken !== ''
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={
            <PublicRoute authenticated={isLogin} component={<Signup />} />
          }
        />
        <Route
          path="/community"
          element={
            <PrivateRoute authenticated={isLogin} component={<Community />} />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
