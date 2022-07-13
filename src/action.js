import axios from "axios";

export const getTodos = async () => {
  let r = await axios.get("http://localhost:8080/todos");
  return r.data;
};

export const postTodos = async (newTodo) => {
  let r = await axios.post("http://localhost:8080/todos", { newTodo });
  return r.data;
};
