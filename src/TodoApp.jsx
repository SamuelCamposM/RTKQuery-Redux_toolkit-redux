import React, { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const prevTodo = () => {
    setTodoId(Math.max(1, todoId - 1));
  };

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4> isLoading... {isLoading ? "Si" : "No "} </h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.userId}>
            {" "}
            <strong> {todo.completed ? "Completed" : "Done"} </strong>{" "}
            {todo.title}{" "}
          </li>
        ))}
      </ul> */}
    </>
  );
};
