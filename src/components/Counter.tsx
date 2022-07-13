import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const handleOnclickInc = (value: number) => {
    setCount(count + value);
  };
  const handleOnclickDec = (value: number) => {
    setCount(count - value);
  };
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => handleOnclickInc(1)}>Increment</Button>
      <Button onClick={() => handleOnclickDec(1)}>Decrement</Button>
    </div>
  );
};

export default Counter;
