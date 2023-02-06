import { useCount, useCountAction } from "./CounterProvider";

const CounterIncrease = () => {
    const count = useCount();
    const setCount = useCountAction();
    return (
        <>
            <p>Counter is {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
        </>
    );
}

export default CounterIncrease;