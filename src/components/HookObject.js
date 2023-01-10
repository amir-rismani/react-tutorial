import { useState } from "react";

const HookObject = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "" });

    const firstNameChangeHandler = (event) => {
        // Using shallow copy 
        setUser({ ...user, firstName: event.target.value });
    }

    const lastNameChangeHandler = (event) => {
        setUser({ ...user, lastName: event.target.value })
    }

    return (
        <div>
            <div>
                <label htmlFor="first-name">First Name </label>
                <input id="first-name" name="first-name" value={user.firstName} onChange={firstNameChangeHandler} />
            </div>
            <div>
                <label htmlFor="last-name">Last Name </label>
                <input id="last-name" name="last-name" value={user.lastName} onChange={lastNameChangeHandler} />
            </div>

            {JSON.stringify(user)}
        </div>
    );
}

export default HookObject;