import React, { useState } from 'react'
const Wrapper = (Originalcomponent) => {
    console.log({ Originalcomponent });
    const NewComp = (props) => {
        console.log({props});
        const [getCount, setCount] = useState(0);
        const clickHandler = () => {
            setCount(getCount + 1)
        }
        return (
            <Originalcomponent count={getCount} clickHandler={clickHandler} {...props} />
        );
    }
    return NewComp
}
export default Wrapper;    