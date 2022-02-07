import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactCrop from 'react-image-crop';
import ImageCropper from "../ImageCropper";
const Home = () => {
    const [getLoggedIn, setLoggedIn] = useState(false);
    const userData = JSON.parse(localStorage.getItem('users'));
    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);
    useEffect(() => {
        if (userData) {
            setLoggedIn(true)
        }
    }, [])
    const onHandleLogout = () => {
        localStorage.removeItem('users')
        console.log("logout");
    }

    const onUploadFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();

            reader.addEventListener('load', () =>
                setImageToCrop(reader.result)
            );
            console.log(event.target.files[0])
            reader.readAsDataURL(event.target.files[0]);
        }
    };


    return (
        <>
            <React.Fragment>
                <p>Home Page</p>
                {!getLoggedIn &&
                    <Link to="/user-login">Login</Link>
                }
                {getLoggedIn &&
                    <p onClick={onHandleLogout} >Logout</p>
                }
                {!getLoggedIn &&
                    <Link to="/user-register">Register</Link>
                }

                <input
                    type="file"
                    accept="image/*"
                    onChange={onUploadFile}
                />
                <div>
                    <ImageCropper
                        imageToCrop={imageToCrop}
                        onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
                    />
                </div>
                {
                    croppedImage &&
                    <div>
                        <h2>Cropped Image</h2>
                        <img
                            alt="Cropped Image"
                            src={croppedImage}
                        />
                    </div>
                }

            </React.Fragment>
        </>
    )
}
export default Home;