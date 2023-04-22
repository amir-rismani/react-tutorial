import { useCount, useCountActions } from "./CounterProvider";

const CounterIncrease = () => {
    const count = useCount();
    const dispatch = useCountActions();
    return (
        <>
            <p>Counter is {count}</p>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increase 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increase 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrease 1</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    );
}

export default CounterIncrease;