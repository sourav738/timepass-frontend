import React from 'react'
import { Routes, Navigate } from 'react-router-dom'
const Authentication = (props) => {
  const authData = JSON.parse(localStorage.getItem('users'))
  if(authData){
    const isLoggedIn = Boolean(authData.token)
    return isLoggedIn ? props.children : <Navigate to='/user-login' />
  }else{
    return  <Navigate to='/user-login' />
  }
 
}
export default Authentication;