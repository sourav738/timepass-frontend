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
    useEffect(() => {
        if (userData) {
            setLoggedIn(true)
        }
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
                <Header></Header>
                <CardComponent></CardComponent>
                {/* <p>Home Page</p>
                {!getLoggedIn &&
                    <Link to="/user-login">Login</Link>
                }
                {getLoggedIn &&
                    <p onClick={onHandleLogout} >Logout</p>
                }
                {!getLoggedIn &&
                    <Link to="/user-register">Register</Link>
                }

                <Link to="/add-member">Add Member</Link>
                <form onSubmit={imageUpload}>
                    <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
                    <input type="submit" className={isDisable ? 'disabled' : ''} />
                </form> */}
            </React.Fragment>
        </>
    )
}
export default Home;

