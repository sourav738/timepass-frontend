import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <React.Fragment>
                <p>Home Page</p>
                <Link to="/user-login">Login</Link>
                <Link to="/user-register">Register</Link>
            </React.Fragment>
        </>
    )
}
export default Home;