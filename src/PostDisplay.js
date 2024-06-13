import React, {useState, useEffect} from 'react';
import { OnePost } from './OnePost.js';

export const PostDisplay = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json();         
            })
            .then((response) => response.slice(0,10))
            .then((data) => setPost(data))
            .catch(error => {
                console.error('Ошибка запроса на один пост:', error);
            });
    }, []);

    return (
        <div>
            {post.map((el) => <OnePost title={el.title} body={el.body} key={el.id} />
            )}
        </div>
    );
};







