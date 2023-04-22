import withCounter from "../HOC/withCounter";

const HoverCounter = ({counter, incrementHandler}) => {
    return ( 
        <h1 onMouseOver={incrementHandler}>Hoverd {counter} times.</h1>
    );
}
 
export default withCounter(HoverCounter, 10);