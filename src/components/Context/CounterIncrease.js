import { useContext } from "react";
import { counterContext, counterContextDispatcher } from "./CounterProvider";

const CounterIncrease = () => {
    const count = useContext(counterContext)
    const setCount = useContext(counterContextDispatcher);

    return (
        <>
            <p>Counter is {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}

export default CounterIncrease;