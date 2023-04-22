import { useState } from "react";

const withCounter = (WrappedComponent, incrementValue) => {
    const UpdatedComponent = (props) => {
        const [counter, setCounter] = useState(0)
        const incrementHandler = () => {
            setCounter(counter + incrementValue)
        }

        return <WrappedComponent counter={counter} incrementHandler={incrementHandler} {...props} />
    }
    return UpdatedComponent
}

export default withCounter;