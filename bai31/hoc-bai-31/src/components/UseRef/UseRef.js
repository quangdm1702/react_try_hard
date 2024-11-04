import React, { useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0); 
  const counterObj = {
    current: 0,
  }
  const handleClick = () => {
    setCounter(counter + 1);
    counterRef.current += 1;
    counterObj.current += 1;
  };

  console.log("counter: ", counter);
  console.log("counterRef: ", counterRef);
  console.log("counterObj: ", counterObj);
  console.log("----------------------------------")


  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UseRef;
