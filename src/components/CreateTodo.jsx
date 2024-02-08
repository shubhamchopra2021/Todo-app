import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const CreateTodo = () => {
  const [createTodo, setcreateTodo] = useState("");
  const [tasks, setTasks] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setisEditItem] = useState(null);
  const handleCreateTodo = () => {
    if (!createTodo) {
      alert("Task is empty");
    } else if (createTodo && !toggleSubmit) {
      setTasks(
        tasks.map((todo) => {
          if (todo.id === isEditItem) {
            return { ...todo, task: createTodo };
          }
          return todo;
        })
      );
      setToggleSubmit(true);
      setcreateTodo("");
      setisEditItem(null);
    } else {
      setTasks([...tasks, { id: Date.now(), task: createTodo }]);
      console.log(tasks);
      setcreateTodo("");
    }
  };
  const removeHandler = (index) => {
    const updatedList = tasks.filter((todo) => {
      return index !== todo.id;
    });
    setTasks(updatedList);
  };

  const handleEdit = (id) => {
    let newEditItem = tasks.find((todo) => {
      return todo.id === id;
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setcreateTodo(newEditItem.task);
    setisEditItem(id);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="container mt-4  w-full h-screen">
      <div className="create-todo-container flex justify-center items-center">
        <input
          type="email"
          value={createTodo}
          onChange={(e) => setcreateTodo(e.target.value)}
          id="email"
          className=" border-gray-300 border-solid border-[1px] w-[250px] text-md rounded-m outline-none p-4 focus:ring-blue-500"
          placeholder="Create Todo"
          required
        />
        {toggleSubmit ? (
          <button
            className="bg-blue-500 rounded-md text-white p-4 text-base font-light text-indigo-darkest ml-3"
            onClick={handleCreateTodo}
          >
            Create Todo
          </button>
        ) : (
          <button
            className="bg-green-500 rounded-md text-white p-4 px-7 ml-3 text-base font-light text-indigo-darkest  "
            onClick={handleCreateTodo}
          >
            Update Item
          </button>
        )}
      </div>
      {/* End of Create Task */}
      <div className="tasks-container">
        {tasks.map((todo) => (
          <div className="mt-4 flex" key={todo.id}>
            <ul>
              <li className="bg-zinc-200 p-2 w-[380px] ml-[130px] flex justify-between items-center flex-1 rounded-md">
                <span className="text-2xl w-[220px]">{todo.task}</span>
                <button
                  className="bg-green-500 rounded-md text-white p-3 text-base font-light text-indigo-darkest  "
                  onClick={() => handleEdit(todo.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 rounded-md text-white p-3 text-base font-light text-indigo-darkest "
                  onClick={() => removeHandler(todo.id)}
                >
                  Remove
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTodo;
