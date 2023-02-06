import React, { useContext, useState } from "react";

export const counterContext = React.createContext();
export const counterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return (
        <counterContext.Provider value={count}>
            <counterContextDispatcher.Provider value={setCount}>
                {children}
            </counterContextDispatcher.Provider>
        </counterContext.Provider>
    );
}

export default CounterProvider;

// Custom React hook
export const useCount = () => useContext(counterContext);
export const useCountActions = () => {
    const setCount = useContext(counterContextDispatcher);

    const increaseOne = () => {
        setCount(prevCount => prevCount + 1)
    }

    const increaseFive = () => {
        setCount(prevCount => prevCount + 5)
    }

    return { increaseOne, increaseFive }
}