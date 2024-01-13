import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoFilters } from "./TodoFilters";

export const TodoList = ({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
}) => {
  let todos3 = Object.values(todos);
  return (
    <ul className="mt-4">
      <TodoFilters
        activeFilter={activeFilter}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
      />
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
