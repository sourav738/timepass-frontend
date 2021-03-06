import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setUserData } from "../actions";

import apiList from '../Api/apilist'
const Login = (props) => {
    console.log("set exist login")
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [getLogin, setLogin] = useState({
        email: '',
        password: ''
    })
    const post = useSelector(state =>
        console.log({ state })
    )
    const handleSubmit = () => {
        console.log("login data");
        const data = {
            email: getLogin.email,
            password: getLogin.password,
        }
        axios.post(apiList.login, data).then((res) => {
            if (res.data.status == "OK") {
                localStorage.setItem('users', JSON.stringify(res.data.data))
                // try {
                //     dispatch(setUserData(res.data.data))
                // } catch (err) {
                //     console.log({ err })
                // }
                navigate('/');
            } else {
                alert(res.data.msg)
            }

        }).catch((err) => {

        })
    }
    useEffect(() => {
        if (localStorage.getItem('users')) {
            const authData = JSON.parse(localStorage.getItem('users'))
            const isLoggedIn = Boolean(authData.token)
            console.log("islogged is true", isLoggedIn)
            if (isLoggedIn) {
                navigate('/')
            }
            //  const isLoggedIn = Boolean(authData.token)
           
        }
    }, [])
    return (
        <>
            <div><Link to='/'>Home</Link></div>
            <p>Login</p>

            <div>
                <span><label>Email</label></span>
                <input type="text"
                    name=""
                    placeholder="Enter Your Email"
                    value={getLogin.email}
                    onChange={({ target }) => setLogin(email => ({ ...email, email: target.value }))}
                />
            </div>
            <div>
                <span><label>Password</label></span>
                <input key="field2"
                    type="password"
                    name="field2"
                    placeholder="Enter Your Password"
                    onChange={({ target }) => setLogin(password => ({ ...password, password: target.value }))}
                    value={getLogin.password} />
            </div>


            <button onClick={handleSubmit}>Login</button>
        </>
    )

}
export default Login;
