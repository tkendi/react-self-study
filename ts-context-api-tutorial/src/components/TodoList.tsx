import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const Todos = [
    {
      id: 1,
      text: "Context API 배우기",
      done: true,
    },
    {
      id: 2,
      text: "TypeScript 배우기",
      done: true,
    },
    {
      id: 3,
      text: "TypeScript와 Context API 함께 사용하기",
      done: false,
    },
  ];

  return (
    <ul>
      {Todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList