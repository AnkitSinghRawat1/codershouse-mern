import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const GuestRoute = () => {

  const {isAuth} = useSelector((state) => state.auth)
  return (
    !isAuth ? <Outlet />: <Navigate to='/activate' />
  )
}

export default GuestRoute