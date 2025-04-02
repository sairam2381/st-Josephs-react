import React, { useEffect, useState } from "react";
const UseStateComponent = () => {
  const [count, setCount] = useState(10);
  const [countNumber, setCountNumber] = useState(0);
  useEffect(() => {
    setCountNumber(countNumber + 10);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>Count number {countNumber}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};
export default UseStateComponent;
