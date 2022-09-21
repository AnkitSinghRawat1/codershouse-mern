import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const isAuth = false;

const GuestRoute = () => {
  return (
    !isAuth ? <Outlet />: <Navigate to='/rooms' />
  )
}

export default GuestRoute