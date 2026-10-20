import { useState } from 'react';

const PRIORITY_LABELS = { '1': 'High', '2': 'Medium', '3': 'Low' };

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [text, setText] = useState(todo.text);
  const [priority, setPriority] = useState(todo.priority);

  let priorityClass = '';
  if (todo.priority === '1') {
    priorityClass = 'priority-high';
  } else if (todo.priority === '2') {
    priorityClass = 'priority-medium';
  } else {
    priorityClass = 'priority-low';
  }

  const handleEdit = () => {
    setText(todo.text);
    setPriority(todo.priority);
    updateTodo(todo.id, { editEnabled: true });
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    updateTodo(todo.id, { text: text.trim(), priority: priority, editEnabled: false });
  }

  if (todo.editEnabled) {
    return (
      <li className={`list-group-item todo-item ${priorityClass}`} data-testid='todo-item'>
        <form onSubmit={handleSave}>
          <label className='form-label'>Description</label>
          <textarea data-testid='update-todo-text' rows='2'
            className='form-control mb-2' value={text} onChange={(e) => setText(e.target.value)}></textarea>
          <label className='form-label'>Priority</label>
          <select data-testid='update-todo-priority'
            className='form-select mb-3' value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value='1'>High</option>
            <option value='2'>Medium</option>
            <option value='3'>Low</option>
          </select>
          <div className='d-flex gap-2'>
            <button data-testid='update-todo' className='btn btn-brand'>Save</button>
            <button type='button' className='btn btn-light'
              onClick={() => updateTodo(todo.id, { editEnabled: false })}>Cancel</button>
          </div>
        </form>
      </li>
    );
  }

  return (
    <li className={`list-group-item todo-item d-flex align-items-center gap-3 ${priorityClass}`} data-testid='todo-item'>
      <input type='checkbox' className='form-check-input todo-check' checked={todo.completed}
        aria-label='Mark complete'
        onChange={() => updateTodo(todo.id, { completed: !todo.completed })} />
      <span className={`todo-text flex-grow-1 ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
      <span className='priority-badge'>{PRIORITY_LABELS[todo.priority]}</span>
      <div className='todo-actions'>
        <button type='button' data-testid='edit-todo' className='btn-icon' onClick={handleEdit}
          title='Edit'>✏️<span className='visually-hidden'>Edit</span></button>
        <button type='button' data-testid='delete-todo' className='btn-icon btn-icon-danger'
          onClick={() => deleteTodo(todo.id)} title='Delete'>🗑️<span className='visually-hidden'>Delete</span></button>
      </div>
    </li>
  );
}

export default TodoItem;
