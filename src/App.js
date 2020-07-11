import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
    "qazi wants to live stream today",
  ]);
  const [input, setInput] = useState("");
  console.log("🔫", input);
  const addTodo = (event) => {
    //this will fire off when click the button
    event.preventDefault();
    console.log("👽", "Im working!!!");
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>
        Hello Clever Programmers{" "}
        <span role="img" aria-label="Close">
          🚀
        </span>
        !
      </h1>
      <form>
        <FormControl>
          <InputLabel>
            <span role="img" aria-label="Close">
              ✅
            </span>{" "}
            Write a Todo
          </InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
