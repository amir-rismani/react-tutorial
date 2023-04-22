import withCounter from "../HOC/withCounter";

const ClickCounter = ({counter, incrementHandler}) => {
    return ( 
        <h1 onClick={incrementHandler}>Clicked {counter} times.</h1>
    );
}
 
export default withCounter(ClickCounter, 5);