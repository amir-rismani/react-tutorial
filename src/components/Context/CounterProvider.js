import React, { useContext, useReducer, useState } from "react";

export const counterContext = React.createContext();
export const counterContextDispatcher = React.createContext();

const initialState = 0

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'increment':
            return state + action.value;
        case 'decrement':
            return state - action.value;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const CounterProvider = ({ children }) => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <counterContext.Provider value={count}>
            <counterContextDispatcher.Provider value={dispatch}>
                {children}
            </counterContextDispatcher.Provider>
        </counterContext.Provider>
    );
}

export default CounterProvider;

// Custom React hook
export const useCount = () => useContext(counterContext);
export const useCountActions = () => useContext(counterContextDispatcher);