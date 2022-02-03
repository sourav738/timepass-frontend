import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import apiList from '../Api/apilist'
const Login = () => {
    const navigate = useNavigate();
    const [getLogin, setLogin] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = () => {
        console.log("login data");
        const data = {
            email: getLogin.email,
            password: getLogin.password,
        }
        axios.post(apiList.login, data).then((res) => {
            if (res.data.status == "OK") {
                alert("login");
                const userData = {
                    token: res.data.token
                }
                localStorage.setItem('users', userData)
                console.log("login check");
                navigate('/');
            } else {
                console.log("wrong");
                alert(res.data.msg)
            }

        }).catch((err) => {

        })
    }
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