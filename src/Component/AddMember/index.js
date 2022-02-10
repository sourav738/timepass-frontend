import React, { useEffect, useState } from 'react'
import axios from 'axios'
import copy from 'copy-to-clipboard';
import apilist from '../../Api/apilist';
import { Input } from '@material-ui/core';
const AddMember = () => {
    let i=0;
    const userData = JSON.parse(localStorage.getItem('users'));
    const [getCode, setCode] = useState('')
    const formDataHeader = {
        headers: {
            'token': userData.token,
            'Content-Type': 'multipart/form-data',
        },
    };
    useEffect(() => {
        axios.get(apilist.getcode, formDataHeader).then((res) => {
           setCode(res.data.code)
         //  console.log()
        }).catch((err) => {
        })
    }, [])
    const onHandleCopy = () => {
       // i++
        copy(getCode)
        alert("Code Is Copied");
    }
    return (
        <>
            <p>Send Your Invite Code</p>
            <Input type='text' value={getCode} readOnly />
            <span onClick={onHandleCopy}>Copy Code</span>
        </>
    )
}
export default AddMember