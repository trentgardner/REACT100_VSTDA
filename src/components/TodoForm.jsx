import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('1');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim(), priority);
    setText("");
  }

  return (
    <div className='card'>
      <div className='card-header'>✏️ Add New Todo</div>
      <form className="card-body" onSubmit={handleSubmit}>
        <label className='form-label' htmlFor='create-todo-text'>I want to...</label>
        <textarea id='create-todo-text' data-testid='create-todo-text' rows='3'
          className='form-control mb-3' placeholder='Water the plants, conquer the world...'
          value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <label className='form-label' htmlFor='create-todo-priority'>How much of a priority is this?</label>
        <select id='create-todo-priority' data-testid='create-todo-priority'
          className='form-select mb-4' value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value='1'>High</option>
          <option value='2'>Medium</option>
          <option value='3'>Low</option>
        </select>
        <button data-testid='create-todo' className='btn btn-brand w-100'>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
