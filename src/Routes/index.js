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
import TestContext from "../Pages/TextContext"
import AddMember from "../Component/AddMember"
import TestHigherOrder from "../Component/TestHigherOrder";
const index = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* <AuthRoutes path="/" component={Home} /> */}
                    <Route path="/user-register" element={<Registration />} />
                    <Route path="/user-login" element={<Login></Login>} />
                    <Route path="/context-test" element={<TestContext />} />
                    <Route path="/hoc-test" element={<TestHigherOrder />} />
                    <Route path='/' element={<AuthRoutes><Home></Home></AuthRoutes>} />
                    {/* <Route path='/' element={<Home></Home>} /> */}
                    <Route path='/add-member' element={<AuthRoutes><AddMember></AddMember></AuthRoutes>} />
                </Routes>
            </Router>
        </>
    )
}
export default index;