"use client";
import { useTodos } from "@/store/todos";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const {handleAddTodo} = useTodos()
  // function to add data in a array 
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo)
    setTodo('')
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Write your task"
        name=""
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTodo;
