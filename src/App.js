import React, {useState} from "react";




// export const App = () => {
//   const [inpValue, setInpValue] = useState(''); // inpValue - это листик препода

//   const onInputChange = (event) => {
//     // event.target.value то что нашептал сосед
//     setInpValue(event.target.value); // передаем что нашептал сосед преподу
//   };

//   const clearInp = () => {
//     setInpValue('')
//   }  

//   return (
//     <div>
//       <button onClick={clearInp}>clear</button>
//       <input 
//         value={inpValue} // препод передает листик что показывать (value - руки)
//         type="text" 
//         id='inp' 
//         onChange={onInputChange}
//       /> 
//       <div>Your input is: {inpValue}</div>
//     </div>
//   );
// };

export const App = () => {
  const [inpValue, setInpValue] = useState(''); 
  const [shouldShowText, setShowText] = useState(true); 

  const onInputChange = (event) => {
    setInpValue(event.target.value); 
  };

  const clearInp = () => {
    setShowText(!shouldShowText)
  }  

  return (
    <div>
      <input 
        value={inpValue} 
        type="text" 
        id='inp' 
        onChange={onInputChange}
      /> 
      <button onClick={clearInp}>hide</button>
      {shouldShowText && <>
        <div>{inpValue}</div>
            <select onChange={onInputChange} value={inpValue}>
              <option value={'bmw'}>bmw</option>
              <option value={'lada'}>lada</option>
              <option value={'opel'}>opel</option>
              <option value={'audi'}>audi</option>
              <option value={'vw'}>vw</option>
          </select>
      </>}
      <div>Your input is: {inpValue}</div>
    </div>
  );
};

