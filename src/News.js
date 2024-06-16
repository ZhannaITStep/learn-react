import React, { useEffect, useRef } from "react";

export const News = () => {
  const inputRef = useRef(null);

  useEffect(() => {}, [
    inputRef.current.value
  ])

  return (
    <di ref={inputRef} v>
      <h1>NEWS!</h1>
      <input type="text" id="text" />
    </di>
  );
};
