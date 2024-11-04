import React, { useEffect, useRef, useState } from "react";

const UseRef4 = () => {
  const [inputValue, setInputValue] = useState("");
  const counterRef = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    counterRef.current += 1;
  };

  return (
    <>
      <input ref={inputRef} value={inputValue} onChange={handleChange} />
    </>
  );
};

export default UseRef4;
