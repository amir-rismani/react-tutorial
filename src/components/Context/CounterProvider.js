import React, { useState } from "react";

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