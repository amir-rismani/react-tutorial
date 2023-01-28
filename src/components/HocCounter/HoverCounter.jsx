import withCounter from "../HOC/withCounter";

const HoverCounter = ({counter, increamentHandler}) => {
    return ( 
        <h1 onMouseOver={increamentHandler}>Hoverd {counter} times.</h1>
    );
}
 
export default withCounter(HoverCounter, 10);