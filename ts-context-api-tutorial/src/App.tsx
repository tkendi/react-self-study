import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <React.Fragment>
      <TodoForm />
      <TodoList />
    </React.Fragment>
  );
};

export default App;
