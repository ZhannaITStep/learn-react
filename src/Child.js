import React, {useState, useEffect } from "react";

export const Child = () => {
    const [, rerender] = useState({});
    const [posts, setPosts] = useState([]);

    // setInterval()

    // clearInterval()


console.log("RENDER CHILD!");

    return <div>
            <h2>CHILD!</h2>
            {/* <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => setCounter(counter-1)}>-</button> */}
            <button onClick={() => rerender({})}>rerender child</button>
        </div>
};

