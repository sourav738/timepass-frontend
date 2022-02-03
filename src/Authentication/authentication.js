import React from 'react'
import { Routes,Navigate  } from 'react-router-dom'
const Authentication = (props) =>{
const authData=JSON.parse(localStorage.getItem('users'))
console.log({authData});
if(authData){
const isLoggedIn=Boolean(authData.token)
if(!isLoggedIn){
return <Navigate to='/user-login' />
}
}else{
return <Navigate to='/user-login' />
}
console.log({props});
return (
    <Routes
      {...props}
    />
  );
}
export default Authentication;