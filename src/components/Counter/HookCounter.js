import { useState } from "react";

// The Hooks used in function based component
const HookCounter = () => {
    const [count, setCount] = useState(0);
    const addOneCounterHandler = () => {
        // Use callback function as setCount's parameter -
        // Because new count depends on previous count.
        setCount((prevCount) => prevCount + 1)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={addOneCounterHandler}>Add One</button>
        </div>
    );
}

export default HookCounter;