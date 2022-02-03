import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import AuthRoute from '../Authentication/authentication'
import Home from "../Component/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/login"
const index = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<AuthRoute />}>
                        <Route exact path='/' element={<Home />} />
                    </Route>
                    <Route path="/user-register" element={<Registration />} />
                    <Route path="user-login" element={<Login />} />
                </Routes>
            </Router>
        </>
    )
}
export default index;