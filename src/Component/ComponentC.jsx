import React from "react";
import { FirstName } from "../Pages/TextContext";
const ComponentC = () =>{
    return (
        <>
        <FirstName.Consumer>
            {(fname)=>{
                return(
                    <>
                    My name is {fname}
                    </>
                )
            }}
        </FirstName.Consumer>
        <p>ComponentC</p>
        </>
    )
}
export default ComponentC