
import React,{useState} from 'react'
import Wrapper from '../Wrapper';
const HigherOrderComponent = (props) =>{
    console.log(props.clickHandler);
    const [getCount,setCount]=useState(0);
    // const onHandleClick = () =>{
    //     setCount(getCount+1) 
    // }
    return(
        <>
           <p>{props.name}</p>
        <p>{props.count}</p>
        <button onClick={props.clickHandler}>click me</button>
        </>
    );
}
export default Wrapper(HigherOrderComponent);