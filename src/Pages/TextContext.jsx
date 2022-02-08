import React, { createContext } from "react";
import ComponentC from "../Component/ComponentC";
const FirstName = createContext();
const LastName = createContext();
const TextContext = () => {
    return (
        <>
           <FirstName.Provider value={"sourav"}>
                <LastName.Provider value={"singh"}>
                    <ComponentC />
                </LastName.Provider>
            </FirstName.Provider>
            {/* <ComponentC /> */}
        </>

    )
}
export default TextContext
export { FirstName,LastName };