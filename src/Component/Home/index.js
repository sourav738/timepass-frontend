// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ReactCrop from 'react-image-crop';
// import ImageCropper from "../ImageCropper";
// import axios from "axios";
// import apiList from '../../Api/apilist'
// const Home = () => {
//     const [uploadFile, setUploadFile] = React.useState();
//     const [getLoggedIn, setLoggedIn] = useState(false);
//     const userData = JSON.parse(localStorage.getItem('users'));
//     const [imageToCrop, setImageToCrop] = useState(undefined);
//     const [croppedImage, setCroppedImage] = useState(undefined);
//     const [getImage, setImage] = useState('');
//     useEffect(() => {
//         if (userData) {
//             setLoggedIn(true)
//         }
//     }, [])
//     const onHandleLogout = () => {
//         localStorage.removeItem('users')
//         console.log("logout");
//     }

//    const imageUpload = (event) => {
//         event.preventDefault();
//         const dataArray = new FormData();
//         dataArray.append("profilephoto", uploadFile);
//         const formDataHeader = {
//             headers: {
//                 'token': userData.token,
//                 'Content-Type': 'multipart/form-data',
//             },
//         };

//         axios.post(apiList.imageUpload,dataArray,formDataHeader).then((res) => {
//             console.log({ res });
//         }).catch((err) => {
//             console.log({ err });
//         })
//     }

//     return (
//         <>
//             <React.Fragment>
//                 <p>Home Page</p>
//                 {!getLoggedIn &&
//                     <Link to="/user-login">Login</Link>
//                 }
//                 {getLoggedIn &&
//                     <p onClick={onHandleLogout} >Logout</p>
//                 }
//                 {!getLoggedIn &&
//                     <Link to="/user-register">Register</Link>
//                 }
//                 <form onSubmit={imageUpload}>

//                 <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
//                  <input type="submit" /> 
//                 </form>


//                 {/* <div>
//                     <ImageCropper
//                         imageToCrop={imageToCrop}
//                         onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
//                     />
//                 </div>
//                 {
//                     croppedImage &&
//                     <div>
//                         <h2>Cropped Image</h2>
//                         <img
//                             alt="Cropped Image"
//                             src={croppedImage}
//                         />
//                     </div>
//                 } */}

//             </React.Fragment>
//         </>
//     )
// }
// export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactCrop from 'react-image-crop';
import ImageCropper from "../ImageCropper";
import axios from "axios";
import apilist from '../../Api/apilist'

export default function Home() {
    const [getLoggedIn, setLoggedIn] = useState(false);
    const [uploadFile, setUploadFile] = React.useState();
    const [superHero, setSuperHero] = React.useState();
    const userData = JSON.parse(localStorage.getItem('users'));
    const onHandleLogout = () => {
        localStorage.removeItem('users')
        console.log("logout");
    }
    const submitForm = (event) => {
        event.preventDefault();
        const formDataHeader = {
            headers: {
                "token": userData.token,
                "Content-Type": "multipart/form-data",
            },
        };
        console.log({ uploadFile });
        const dataArray = new FormData();
        dataArray.append("profilephoto", uploadFile);
        console.log({ dataArray });
        axios
            .post(apilist.imageUpload, dataArray, formDataHeader)
            .then((response) => {
                console.log({ response });
                // successfully uploaded response
            })
            .catch((error) => {
                console.log({ error });
                // error response
            });
    };

    return (
        <div>
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
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    onChange={(e) => setSuperHero(e.target.value[0])}
                    placeholder={"Superhero Name"}
                />
                <br />
                <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}