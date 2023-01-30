import { useRef, useEffect, useState } from "react";

// Use cases of useRef hook
// 1. DOM access.
// 2. To store the value of previous state.
const FunctionalRef = () => {
    const inputRef = useRef();
    const previousValue = useRef();
    const previousNumber = useRef();

    const [value, setValue] = useState("");
    const [number, setNumber] = useState(0)

    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    useEffect(()=>{
        // Does not re-render component.
        previousValue.current = value;
    },[value]);

    useEffect(()=>{
        // Does not re-render component.
        previousNumber.current = number;
    },[number]);

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    const clickHandler = () => {
        setNumber(Math.ceil(Math.random()*1000))
    }

    return ( 
        <div>
            <br/>
            <input type="text" value={value} onChange={changeHandler} ref={inputRef}/>
            <p>The input value is: {value}, previous value is {previousValue.current}</p>
            <br/>
            <br/>
            <br/>
            <button onClick={clickHandler}>Generate random number</button>
            <p>Number is: {number}</p>
            <p>Previous Number is: {previousNumber.current}</p>
        </div>
    );
}
 
export default FunctionalRef;