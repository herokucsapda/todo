import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./index.css";

const TodoList = ({ todos, setTodos }) => {
  function toggleCompleted(index) {
    setTodos(prevTodos => {
      const prevTodo = prevTodos[index];
      const nextTodo = { ...prevTodo };
      nextTodo.completed = !prevTodo.completed;
      const nextTodos = [...prevTodos];
      nextTodos[index] = nextTodo;
      return nextTodos;
    });
  }
  return (
    <div className="todo-list">
      <List>
      {todos.map((todo, index) => (
        // Note: using index (as key and in onClick) is a quick and dirty solution.
        // Works in this case correctly though as no elements are removed nor will the order of them change
        <ListItem button key={index} onClick={() => toggleCompleted(index)}>
          <ListItemText primary={todo.title} className={todo.completed ? "completed" : "not-completed"}/>
        </ListItem>
      ))}
      </List>
    </div>
  );
}

export default TodoList;
