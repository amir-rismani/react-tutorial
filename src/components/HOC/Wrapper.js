// const Wrapper = (props) => {
//     return <div className={props.class}>
//         {props.children}
//     </div>
// };

// HOC is a function
// It shared logic (functionality) between component.
// HOC's input is a component.
// HOC's output is a component

const Wrapper = (WrappedComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
export default Wrapper;