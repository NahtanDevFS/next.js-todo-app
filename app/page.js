"use client";

import { useState, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "./hooks/useTodo";

export default function Home() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState(todos);

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodo(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.done === false);
      setFilteredTodo(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.done === true);
      setFilteredTodo(completedTodos);
    }
  }, [activeFilter, todos]);

  return (
    <main className="bg-gradient-to-tr from-slate-900 to-slate-800 min-h-screen h-full text-slate-500 flex sm:justify-center items-start sm:py-20 py-5 px-5 sm:items-start">
      <div className="bg-slate-900 container flex flex-col max-w-2xl p-4 rounded-xl shadow-fullshape sm:max-w-xl">
        <h1 className="flex justify-center items-center sm:mb-14 mb-7 mt-4 text-4xl font-bold">
          To Do List
        </h1>
        <div className="flex flex-col justify-center items-center gap-2 sm:justify-around sm:flex-row sm:mb-12 mb-9 text-xl">
          <h3>
            Num. tasks: <span className="font-bold text-2xl">{todosCount}</span>
          </h3>
          <h3>
            Remaining:{" "}
            <span className="font-bold text-2xl">{pendingTodosCount}</span>
          </h3>
        </div>
        <div className="flex ml-2 justify-start items-center mb-4 text-xl font-semibold">
          <h3>Add a new task:</h3>
        </div>
        <div className="">
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
        <TodoList
          todos={filteredTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          activeFilter={activeFilter}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
        />
      </div>
    </main>
  );
}
