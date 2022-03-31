import { formatCountdown } from 'antd/lib/statistic/utils'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../Component/Layout/Header'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styled from 'styled-components';
import apilist from '../Api/apilist'

export const FormDesiged = styled.form`
margin:auto;
width:34%;
`
const UpdateProfile = () => {
    const [form] = Form.useForm();
    const userData = JSON.parse(localStorage.getItem('users'));
    const [getProfile, setProfile] = React.useState({ firstname: '', lastname: '' })
    const [firstname, setfirstname] = React.useState('')
    console.log("userdata token", userData.token)
    useEffect(() => {
        const formDataHeader = {
            headers: {
                'token': userData.token,
                'Content-Type': 'multipart/form-data',
            },
        };
        axios.get(apilist.getProfile, formDataHeader).then((res) => {
            console.log({ res })
            console.log("your first name", res.data[0].first_name)
            setfirstname(res.data[0].first_name)
            setProfile(prevState => ({
                ...prevState,
                firstname: res.data[0].first_name,
                lastname: res.data[0].last_name
            }));

            //  Form.setFieldsValue({
            //     userfirstname:res.data[0].first_name
            //   });
            // try{
            //     Form.setFieldsValue({
            //         userfirstname: res.data[0].first_name
            //     });
            // }catch(err){
            //     console.log("error",{err})
            // }
            form.setFieldsValue({
                userfirstname: res.data[0].first_name,
            });
            // const formRef = React.createRef();
            // this.formRef.current.getForm().setFieldsValue({
            //     mobile: "110"
            //   });

            //console.log({ Form })

            // setProfile({firstname:res.data[0].first_name,lastname:res.data[0].last_name})
        }).catch((err) => {
            console.log({ err })
        })
        console.log("useeffect")
        return (() => {
            console.log("removed from component")
        })
    }, [])
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (

        <>
            <Header />
            <FormDesiged>
                <p>name:{getProfile.firstname}</p>
                <Form
                    form={form}


                >
                    <Form.Item
                        name="userfirstname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your firstname!',
                            },
                            {
                                "value": "Ant Design"
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="firstname" />
                    </Form.Item>
                  
                   
                </Form>
            </FormDesiged>

        </>
    )
}
export default UpdateProfile