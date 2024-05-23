import React, {useState} from "react";
// Rerender
// 1. state change
// 2. parent rerender
// 3. context change
// 4. props change
// 5. force rerender


// const someHeavyFunc = () => {
//   console.log('HEAVY!')
//   return new Array(9999).fill(2).map((val) => val ** Math.round(Math.random() * 1000))
// };

// export const Playstation = () => {
//   const [counter, setCounter] = useState(0);
//   const [arr, setArr] = useState(() => someHeavyFunc());


//   const inc = () => {
//       setCounter(ctr => ctr + 1); 
//     // console.log(counter);
//   };

//   console.log('RENDER');

//   return (
//     <>
//       <div>
//         <h1>Sony Playstations:</h1>
//         <p>{counter}</p>
//         <button onClick={inc}>+</button>
//         {/* <button onClick={inc}>-</button> */}
//       </div>
//     </>
//   );
// };



export const Playstation = () => {
  const [counter, setCounter] = useState(0);

  const incUp = () => {
      setCounter(ctr => ctr + 1); 
    // console.log(counter);
  };

  const incDown = () => {
    if (counter) 
      setCounter(counter - 1)
  };

  console.log('RENDER');

    return (
    <>
      <div htmlFor="#ghbnjmk">
        <h1>Hello world!</h1>
        <p>{counter}</p>
        <button onClick={incUp}>+</button>
        <button onClick={incDown}>-</button>
      </div>
    </>
  );
};
