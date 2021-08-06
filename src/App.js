import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todo, setTodo] = useState([])

  const addTodoHandler = (e, input) => {
    e.preventDefault();
    const tempTodo = [...todo]
    tempTodo.push(input)
    setTodo(tempTodo)
  }

  const deleteHandler = (index) => {
    const tempTodo = [...todo]
    tempTodo.splice(index, 1)
    setTodo(tempTodo)
  }

  return (
    <div className="todo-app">
      <h1>TODO APP</h1>
      <TodoForm handle={addTodoHandler} />
      <TodoList todos={todo} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
