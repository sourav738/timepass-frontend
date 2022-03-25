import React from 'react'
import { Routes, Navigate } from 'react-router-dom'
const Authentication = (props) => {
  if (localStorage.getItem('users')) {
    const authData = JSON.parse(localStorage.getItem('users'))
    console.log({ authData })
    if (authData) {

      const isLoggedIn = Boolean(authData.token)
      console.log({ isLoggedIn })
      console.log("props children", props.children)
      return isLoggedIn ? props.children : <Navigate to='/user-login' />
    } else {
      return <Navigate to='/user-login' />
    }
  }
  else {
    return <Navigate to='/user-login' />
  }


}
export default Authentication;