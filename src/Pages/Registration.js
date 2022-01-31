import React, { useState } from "react";
const Registration = () => {
    const [getRegistration, setRegistration] = useState({
        firstName: "",
        middleName: "",
        lastName: ""
    })
    const [getFirstName, setFirstName] = useState("");
    const handleSubmit = () => {
        console.log(getFirstName);
    }
    return (
        <>
            <p>Registration</p>
            <input type="text"
                name=""
                placeholder="Enter your First Name"
                value={getRegistration.firstName}
                onChange={(event) =>
                    getRegistration.firstName(event.target.value)
                }
            />

            <input key="field2" 
            name="field2" onChange={({target}) => setRegistration(firstName => ({...firstName,firstName:target.value}))} value={setRegistration.firstName}/>
     
            <button onClick={handleSubmit}>Save</button>
        </>
    )

}
export default Registration;