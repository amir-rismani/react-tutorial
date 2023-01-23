import { useEffect, useState } from "react";

const FunctionalTimer = () => {
    let [count, setCount] = useState(0);

    useEffect(()=>{
        const counterInterval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
            console.log('interval run!');
        }, 1000);
        // Clean up
        return () => { clearInterval(counterInterval) };
    }, [count]);
    return ( 
        <div>Class Timer</div>
    );
}
 
export default FunctionalTimer;