import { useState } from "react";

const withCounter = (WrappedComponent, increamentValue) => {
    const UpdatedComponent = (props) => {
        const [counter, setCounter] = useState(0)
        const increamentHandler = () => {
            setCounter(counter + increamentValue)
        }

        return <WrappedComponent counter={counter} increamentHandler={increamentHandler} {...props} />
    }
    return UpdatedComponent
}

export default withCounter;