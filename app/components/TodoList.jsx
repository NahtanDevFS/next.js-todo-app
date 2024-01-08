import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos2,
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  let todos3 = Object.values(todos);
  console.log(todos3);
  const result = Array.isArray(todos);
  console.log(result);
  return (
    <ul className="mt-2">
      {todos3.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
};
