import React, { useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { useForm } from "../hooks/useForm";
import { useState } from "react";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description,
  });

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;

    handleUpdateTodo(id, description);

    setDisabled(!disabled);

    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate} className="flex">
      <input
        type="text"
        size="40"
        maxLength="30"
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="start a new task..."
        readOnly={disabled}
        ref={focusInputRef}
        className={`bg-slate-900 pl-2 p-2 w-full mr-4 ml-9 outline-none text-ellipsis whitespace-nowrap font-semibold ${
          todo.done ? "line-through" : ""
        }`}
      />
      <button type="submit" className="">
        <CiEdit className="size-8" />
      </button>
    </form>
  );
};
