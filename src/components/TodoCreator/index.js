import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const TodoCreator = ({ onCreate }) => {
  const [todo, setTodo] = useState("");

  const handleKeyDown = e => {
    const pressedEnter = e.key === "Enter";
    if (!pressedEnter) return;
    const hasInput = !!todo && todo.length !== 0;
    if (!hasInput) return;
    onCreate(todo);
    resetInput();
  };

  function resetInput() {
    setTodo("");
  }

  return (
    <div className="todo-creator">
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        label="Enter Todo ..."
        variant="outlined"
      />
    </div>
  );
};

export default TodoCreator;
