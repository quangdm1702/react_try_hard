import React, { useReducer} from "react";

const reducer = (state, action) => {
  // action : UP DOWN RESET
  switch(action) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

const CounterReducer = () => {
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>Kết quả: {counter}</div>
      <button onClick={() => dispatch("UP")}>Up</button>
      <button onClick={() => dispatch("DOWN")}>Down</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </>
  );
};

export default CounterReducer;
