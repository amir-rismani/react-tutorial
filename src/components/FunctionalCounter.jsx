import { useEffect } from "react";
import { useState } from "react";

const FunctionalCounter = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Document title updating...");
        document.title = `Click: ${count} times.`;
    },[count]);

    return ( 
        <div>
            <p>Name: <input onChange={(event) => setName(event.target.value)} value={name}/></p>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add One</button>
        </div>
    );
}
 
export default FunctionalCounter;