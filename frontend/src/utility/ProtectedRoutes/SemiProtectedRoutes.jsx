import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const isAuth = true
const userActivated = false
const SemiProtectedRoutes = () => {
  return (
    !isAuth ? <Navigate to='/' />  : isAuth && !userActivated ? <Outlet /> : <Navigate to='/activateThis' />
  )
}

export default SemiProtectedRoutes