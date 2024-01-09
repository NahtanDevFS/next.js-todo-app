import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li className="flex items-center mt-3">
      <span
        onClick={() => handleCompleteTodo(todo.id)}
        className="flex items-center overflow-hidden mt-0"
      >
        <label
          className={`w-6 h-6 rounded-3xl cursor-pointer absolute border-2 border-solid border-green-600 mr-3 transition-all duration-200 ease-in-out ${
            todo.done ? "bg-green-600" : "bg-slate-900"
          } `}
        ></label>
      </span>
      <div className="flex">
        <TodoUpdate
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          className="items-center"
        />
        <button onClick={() => handleDeleteTodo(todo.id)} className=" ml-2">
          <FaRegTrashAlt className="w-6 h-6" />
        </button>
      </div>
    </li>
  );
};
