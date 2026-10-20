import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text, priority) => {
    const newTodo = {id: Date.now() + Math.random(), text: text, priority: priority, completed: false, editEnabled: false};
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const updateTodo = (id, changes) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, ...changes } : todo)));
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className='app'>
      <header className='hero'>
        <div className='container'>
          <div className='hero-logo' aria-hidden='true'>✓</div>
          <h1>Very Simple Todo App</h1>
          <p className='lead'>Track all of the things.</p>
        </div>
      </header>
      <main className='container main-content'>
        <div className='row g-4'>
          <div className='col-md-4'><TodoForm addTodo={addTodo}/></div>
          <div className='col-md-8'><TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/></div>
        </div>
      </main>
    </div>
  )
}

export default App
