
import React,{useState} from 'react'
import Wrapper from '../Wrapper';
const HigherOrderComponentA = (props) =>{
    console.log({props});
    const [getCount,setCount]=useState(0);
    return(
        <>
        <p>{props.name}</p>
        <p>{props.count}</p>
        <button  onMouseEnter={props.clickHandler}>click me A</button>
        </>
    );
}
export default Wrapper(HigherOrderComponentA)