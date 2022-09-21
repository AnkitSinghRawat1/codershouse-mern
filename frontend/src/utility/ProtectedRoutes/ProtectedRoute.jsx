import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const isAuth = false
const ProtectedRoute = () => {
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  )
}

export default ProtectedRoute