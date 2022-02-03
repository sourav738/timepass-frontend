import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import apiList from '../Api/apilist'
const Registration = () => {
    const [getRegistration, setRegistration] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: '',
        phoneNo: '',
        password: ''
    })
    const [getFirstName, setFirstName] = useState("");
    const handleSubmit = () => {
        console.log({ getRegistration });
        const data = {
            first_name: getRegistration.firstName,
            last_name: getRegistration.lastName,
            middle_name: getRegistration.middleName,
            email: getRegistration.email,
            phone_no: getRegistration.phoneNo,
            password: getRegistration.password,
        }
        axios.post(apiList.register, data).then((res) => {
            alert(res.data.message)
        }).catch((err) => {
            alert("Please Try Again")
        })
    }
    return (
        <>
            <div><Link to='/'>Home</Link></div>
            <p>Registration</p>
            <div>
                <span><label>First Name</label></span>
                <input type="text"
                    name=""
                    placeholder="Enter your First Name"
                    value={getRegistration.firstName}
                    onChange={({ target }) => setRegistration(firstName => ({ ...firstName, firstName: target.value }))}
                />
            </div>
            <div>
                <span><label>Middle Name</label></span>
                <input type="text"
                    name=""
                    placeholder="Enter Your Middle Name"
                    value={getRegistration.middleName}
                    onChange={({ target }) => setRegistration(middleName => ({ ...middleName, middleName: target.value }))}
                />
            </div>
            <div>
                <span><label>Last Name</label></span>
                <input type="text"
                    name=""
                    placeholder="Enter Your Last Name"
                    value={getRegistration.lastName}
                    onChange={({ target }) => setRegistration(lastName => ({ ...lastName, lastName: target.value }))}
                />
            </div>
            <div>
                <span><label>Email</label></span>
                <input type="text"
                    name=""
                    placeholder="Enter Your Email"
                    value={getRegistration.email}
                    onChange={({ target }) => setRegistration(email => ({ ...email, email: target.value }))}
                />
            </div>
            <div>
                <span><label>Phone No</label></span>
                <input key="field2"
                    name="field2"
                    placeholder="Enter Your Phone No"
                    onChange={({ target }) => setRegistration(phoneNo => ({ ...phoneNo, phoneNo: target.value }))}
                    value={setRegistration.phoneNo} />
            </div>

            <div>
                <span><label>Password</label></span>
                <input key="field2"
                    type="password"
                    name="field2"
                    placeholder="Enter Your Password"
                    onChange={({ target }) => setRegistration(password => ({ ...password, password: target.value }))}
                    value={setRegistration.password} />
            </div>


            <button onClick={handleSubmit}>Save</button>
        </>
    )

}
export default Registration;