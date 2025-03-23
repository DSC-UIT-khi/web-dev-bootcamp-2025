import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, inputValue]);

    // Explained Spread Operators
    // setTodos((prev) => {
    //   console.log("prev", prev);
    //   return [...prev, inputValue];
    // });
    setInputValue("");
  };

  const handleDeleteTodos = () => {
    setTodos([]);
  };

  const handleFetchDynamicData = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log("data", data);
  }, [todos]);

  useEffect(() => {
    handleFetchDynamicData();
  }, []);

  return (
    <div>
      <input
        placeholder="Enter task to do..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button
        onClick={handleDeleteTodos}
        disabled={todos.length === 0}
        className="delete-button"
      >
        Delete
      </button>

      {todos.map((task, index) => (
        <div key={index}>
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
