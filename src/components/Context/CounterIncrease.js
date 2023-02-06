import { useCount, useCountActions } from "./CounterProvider";

const CounterIncrease = () => {
    const count = useCount();
    const { increaseOne, increaseFive } = useCountActions();
    return (
        <>
            <p>Counter is {count}</p>
            <button onClick={increaseOne}>Increase 1</button>
            <button onClick={increaseFive}>Increase 5</button>
        </>
    );
}

export default CounterIncrease;