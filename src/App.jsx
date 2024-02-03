import "./App.css";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <>
      <h1 className="text-center text-4xl p-5 h-[200px] flex items-center justify-center bg-blue-700">
        TO DO List
      </h1>
      <CreateTodo />
    </>
  );
}

export default App;
