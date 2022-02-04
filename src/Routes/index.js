import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import AuthRoutes from '../Authentication/authentication'
import Home from "../Component/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/login"
const index = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* <AuthRoutes path="/" component={Home} /> */}
                    <Route path="/user-register" element={<Registration />} />
                    <Route path="/user-login" element={<Login />} />
                    <Route path='/' element={<AuthRoutes><Home></Home></AuthRoutes>} />
                </Routes>
            </Router>
        </>
    )
}
export default index;