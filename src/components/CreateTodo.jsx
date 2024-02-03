import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const CreateTodo = () => {
  const [createTodo, setCreateTodo] = useState();
  const [taskList, setTaskList] = useState([]);
  const handlecreateTodo = (e) => {
    setCreateTodo(e.target.value);
  };

  const addtodo = () => {
    setTaskList([...taskList, createTodo]);
    setCreateTodo("");
  };
  const deleteTask = (id) => {
    const newList = taskList;
    newList.splice(id, 1);
    setTaskList([...newList]);
  };

  return (
    <>
      <div className="container w-full flex py-3 justify-center">
        <input
          onChange={handlecreateTodo}
          value={createTodo}
          type="text"
          placeholder="Create Todo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          className="text-white ml-[20px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={addtodo}
        >
          Add task
        </button>
      </div>
      {/* Todo tasks */}
      <div className="">
        {taskList.map((item, id) => {
          return <TodoList key={id} item={item} onDelete={deleteTask} />;
        })}
      </div>
    </>
  );
};

export default CreateTodo;
