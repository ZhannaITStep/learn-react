import React, {useState} from "react";

export const Child = () => {
    const [,rerender] = useState({});

    console.log("RENDER CHILD!")

    return <div>
            <h2>CHILD!</h2>
            <button onClick={() => rerender({})}>rerender child</button>
        </div>
};

