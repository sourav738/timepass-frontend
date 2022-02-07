import React from "react";
import { FirstName,LastName } from "../Pages/TextContext";
const ComponentC = () =>{
    return (
        <>
        <FirstName.Consumer>
            {(fname)=>{
                return(
                    <LastName.Consumer>
                        {(lname)=>{
                            return(
                              <>My name is {fname} {lname}</>
                            )
                        }}
                    </LastName.Consumer>
                   
                )
            }}
        </FirstName.Consumer>
        <p>ComponentC</p>
        </>
    )
}
export default ComponentC