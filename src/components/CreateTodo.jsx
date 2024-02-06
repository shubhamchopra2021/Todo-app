import React from "react";
import "./CreateTodo.css";
import { useState } from "react";
const CreateTodo = () => {
  const [createTask, setCreateTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInput = (e) => {
    setCreateTask(e.target.value);
  };
  const handleCreateTask = () => {
    setTodoList([
      ...todoList,
      { id: Date.now(), task: createTask, completed: false },
    ]);
    setCreateTask("");
  };
  const handleDelete = (id) => {
    const newList = todoList;
    newList.splice(id, 1);
    setTodoList([...newList]);
  };

  const handleChecked = (id) => {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(updatedList);
    console.log(updatedList);
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-center">TODO LIST</h1>
      <div className="create-todo flex justify-center items-center py-4">
        <input
          value={createTask}
          onChange={handleInput}
          type="text"
          name=""
          id=""
          placeholder="Create Todo"
          className="create-todo-input w-1/2 border-solid border-2 border-gray-600 rounded-md py-3 px-4 text-xl"
        />
        <button
          className="create-todo-button py-4 px-8 bg-green-500 rounded-md text-white ml-4"
          onClick={handleCreateTask}
        >
          Create Task
        </button>
      </div>

      <div className="todo-list w-1/2 ml-24  ">
        {todoList.map((todo, id) => (
          <ul
            key={id}
            className="todo-item bg-zinc-200 justify-between rounded-md mb-2  flex items-center"
          >
            <li
              className={`todo-item py-4 text-2xl flex-1 ml-2 ${
                todo.completed === true ? "checked" : ""
              }`}
            >
              <input
                type="checkbox"
                name=""
                id=""
                className="ml-2 flex-2 mt-1"
                onChange={() => handleChecked(todo.id)}
              />
              <span className="ml-2">{todo.task} </span>
            </li>
            <button
              className="remove-todo-button py-2 px-4 bg-red-600 rounded-md text-white mr-2"
              onClick={() => handleDelete(id)}
            >
              Remove
            </button>
          </ul>
        ))}
      </div>
    </>
  );
};
export default CreateTodo;
