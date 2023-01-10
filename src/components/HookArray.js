import { useState } from "react";

const HookArray = () => {
    const [items, setItems] = useState([])
    const addNewRandomNumberHandler = () => {
        setItems([...items, { id: items.length, number: Math.floor(Math.random() * 100) }])
    }
    return (
        <div>
            <button onClick={addNewRandomNumberHandler}>Add new random number</button>

            {items.map(item => {
                return (
                    <li key={item.id}>{item.number}</li>
                )
            })}

        </div>
    );
}

export default HookArray;