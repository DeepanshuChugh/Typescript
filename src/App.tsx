import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodosList from "./components/TodosList";

function App() {
  const handleAdd = () => {};
  return (
    <div className="App">
      <Header label={"Counter"} />
      <Counter />
      <br></br>
      <Header label={"Todos"} />
      <Todos handleAdd={handleAdd} />
      <TodosList />
    </div>
  );
}

export default App;
