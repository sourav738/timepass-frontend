import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactCrop from 'react-image-crop';
import ImageCropper from "../ImageCropper";
import axios from "axios";
import apiList from '../../Api/apilist'
import Header from "../Layout/Header";
import CardComponent from "../Layout/Card";
const Home = () => {
    const [uploadFile, setUploadFile] = React.useState();
    const [getLoggedIn, setLoggedIn] = useState(false);
    const userData = JSON.parse(localStorage.getItem('users'));
    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);
    const [getImage, setImage] = useState('');
    const [isDisable, setDisable] = useState(false)
    const [getProfile, setProfile] = useState([])
    useEffect(() => {
        if (userData) {
            setLoggedIn(true)
        }
        const formDataHeader = {
            headers: {
                'token': userData.token,
                'Content-Type': 'application/json',
            },
        };
        axios.get(apiList.userList, formDataHeader).then((res) => {
            console.log({ res })
            setProfile(res.data)
        }).catch((err) => {
            console.log({ err })
        })
    }, [])
    const onHandleLogout = () => {
        localStorage.removeItem('users')
    }
    const imageUpload = (event) => {
        event.preventDefault();
        setDisable(true)
        const dataArray = new FormData();
        dataArray.append("profilephoto", uploadFile);
        const formDataHeader = {
            headers: {
                'token': userData.token,
                'Content-Type': 'multipart/form-data',
            },
        };
        axios.post(apiList.imageUpload, dataArray, formDataHeader).then((res) => {
            setDisable(false)
            alert("Successfully uploaded");
        }).catch((err) => {
            setDisable(false)
        })
    }
    return (
        <>

            <React.Fragment>
                <Header logedin={getLoggedIn}></Header>
                <CardComponent data={getProfile}></CardComponent>

            </React.Fragment>
        </>
    )
}
export default Home;

