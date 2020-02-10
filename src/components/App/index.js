import React, {useState} from 'react'
import { Box, Container } from '@material-ui/core'
import TodoList from 'components/TodoList';
import TodoCreator from 'components/TodoCreator';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    const nextTodos = [...todos];
    const todo = { title: title, completed: false };
    nextTodos.unshift(todo);
    setTodos(nextTodos);
  }

  return (
    <Container>
      <Box
        my={20}
        display='flex'
        justifyContent='center'
        alignItems='left'
        flexDirection='column'
      >
        <TodoCreator onCreate={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Box>
    </Container>
  );
}

export default App;
