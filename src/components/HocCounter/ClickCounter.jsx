import withCounter from "../HOC/withCounter";

const ClickCounter = ({counter, increamentHandler}) => {
    return ( 
        <h1 onClick={increamentHandler}>Clicked {counter} times.</h1>
    );
}
 
export default withCounter(ClickCounter, 5);