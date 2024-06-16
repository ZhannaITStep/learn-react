import React, { useEffect } from "react";



export const App = () => {
    const [posts, setPosts] = useEffect([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        
    })

    return <div>hello world!</div>
}