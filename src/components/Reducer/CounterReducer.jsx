import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increamentOne':
            return state + 1;
        case 'increamentFive':
            return state + 5;
        case 'decreament':
            return state - 1;
        default:
            return state;
    }
}
const CounterReducer = () => {    
    // useReducer is like useState for state managment
    // Reducer => To reduce complexity and keep all your logic in one easy-to-access place

    // Usage useReducer hook
    // 1. import useReducer()
    // 2. useReducer takes two arguments (reducerFunction, initialState)
    //    * reducerFunction takes two arguments (state, action)
    // 3. return array [value, dispatch]
    const [count, dispatch] = useReducer(reducer, initialState);

    return ( 
        <>
        <br/>
            Welcome to Counter Reducer, Count is {count}
            <br/>
            <button onClick={()=>dispatch('increamentOne')}>Increament One</button>
            <button onClick={()=>dispatch('increamentFive')}>Increament Five</button>
            <button onClick={()=>dispatch('decreament')}>Decreament</button>
        </>
    );
}
 
export default CounterReducer;