import React from 'react'
import { Route,Redirect } from 'react-router-dom'
const Authentication = (props) =>{
const authData=JSON.parse(localStorage.getItem('users'))
if(authData){
const isLoggedIn=Boolean(authData.token)
if(!isLoggedIn){
return <Redirect to='/login' />
}
}else{
return <Redirect to='/login' />
}
return (
    <Route
      {...props}
    />
  );
}
export default Authentication;