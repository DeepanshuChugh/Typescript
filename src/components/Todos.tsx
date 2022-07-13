import React, { useState } from "react";
import Button from "./Button";

interface todosProps {
  handleAdd: Function;
}

const Todos = ({ handleAdd }: todosProps) => {
  const [inputValue, setInputValue] = useState("");
    const handleClick = () = {
        handleAdd(inputValue)
    
}
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleClick}>Add</Button>
    </div>
  );
};

export default Todos;
