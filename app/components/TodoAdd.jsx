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
        className="focus:shadow-lg focus:shadow-blue-700 pl-2 py-4 placeholder:text-slate-600 font-semibold sm:w-[80%] min-[308px]:w-[70%] w-[100%] bg-slate-800 rounded-2xl outline-none transition-all duration-300 ease-in-out"
      />
      <button
        type="submit"
        className="sm:ml-8 min-[375px]:ml-[9%] min-[308px]:mt-0 mt-2 text-slate-300 font-semibold text-xl  ml-2 bg-slate-700 p-3 rounded-2xl hover:bg-slate-500 transition-all duration-300 ease-in-out"
      >
        Add
      </button>
    </form>
  );
};
