import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit} className="relative">
      <input
        type="text"
        name="description"
        maxLength="30"
        value={description}
        onChange={onInputChange}
        placeholder="start a new task..."
        className="focus:shadow-lg focus:shadow-blue-700 pl-2 py-4 placeholder:text-slate-600 font-semibold w-[100%] bg-slate-800 rounded-2xl outline-none transition-all duration-300 ease-in-out"
      />
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="mt-4 text-slate-300 font-semibold text-xl bg-blue-800 p-3 px-[10%] rounded-2xl hover:bg-blue-500 transition-all duration-300 ease-in-out"
        >
          Add
        </button>
      </div>
    </form>
  );
};
