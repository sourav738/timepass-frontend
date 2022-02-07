import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [getLoggedIn, setLoggedIn] = useState(false);
    const userData = JSON.parse(localStorage.getItem('users'));
    useEffect(() => {
        if (userData) {
            setLoggedIn(true)
        }
    }, [])
    const onHandleLogout = () => {
        localStorage.removeItem('users')
        setLoggedIn(false)
    }
    return (
        <>
            <React.Fragment>
                <p>Home Page</p>
                {!getLoggedIn &&
                    <Link to="/user-login">Login</Link>
                }
                {getLoggedIn &&
                    <p onClick={onHandleLogout} >Logout</p>
                }
                {!getLoggedIn &&
                    <Link to="/user-register">Register</Link>
                }
            </React.Fragment>
        </>
    )
}
export default Home;