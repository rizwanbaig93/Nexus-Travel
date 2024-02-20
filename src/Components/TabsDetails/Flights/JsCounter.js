import React, { useState } from "react";
import "./JsCounter.css"

export default function Counter() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="Counter d-flex align-item-center">
      <div className=""><button className="Counter-Button " onClick={decrement}>-</button></div>
      <div className="Counter-Heading pt-1"><h1>{count}</h1></div> 
      <div className=""><button className="Counter-Button" onClick={increment}>+</button></div>
    </div>
  );
}
