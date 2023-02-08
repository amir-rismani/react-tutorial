import { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 0,
};

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'increament':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decreament':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increament2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decreament2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
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
            Welcome to Counter Reducer,<br/> First Counter is {count.firstCounter}<br/>Second Counter is {count.secondCounter}
            <br/>
            <button onClick={()=>dispatch({type:'increament', value:1})}>Increament One</button>
            <button onClick={()=>dispatch({type:'increament', value:5})}>Increament Five</button>
            <button onClick={()=>dispatch({type:'decreament', value:1})}>Decreament</button>
            <br/>
            <button onClick={()=>dispatch({type:'increament2', value:1})}>Increament One 2</button>
            <button onClick={()=>dispatch({type:'increament2', value:5})}>Increament Five 2</button>
            <button onClick={()=>dispatch({type:'decreament2', value:1})}>Decreament 2</button>
            <br/>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    );
}
 
export default CounterReducer;