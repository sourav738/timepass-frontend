import React, { createContext } from "react";
import ComponentC from "../Component/ComponentC";
const FirstName = createContext();
const TextContext = () => {
   return (
        <>
            <FirstName.Provider value={"sourav singh"}>
                <ComponentC />
            </FirstName.Provider>
            {/* <ComponentC /> */}
        </>

    )
}
export default TextContext
export { FirstName };