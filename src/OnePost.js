import React, {useEffect, useState} from 'react';

export const OnePost = ({title, body}) => {
    const [shouldBlink, setShouldBlink] = useState(false);
    const [toggleColor, setToggleColor] = useState(false);

    const onClick = () => {
        setShouldBlink((blink) => !blink);
    };

    useEffect(() => {
        let int;
        if (shouldBlink) {
            int = setInterval(() => {
                setToggleColor(prev => !prev) 
            }, 500)
        }

        return () => {
            clearInterval(int)
        }
    })

    return (
        <div style={{border: `2px solid ${toggleColor ? 'orange' : 'blue'} `}}>
            <h1>Один пост:</h1>
                <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <button onClick={onClick}>toggle hot</button>
                </div>
        </div>
    );
};
