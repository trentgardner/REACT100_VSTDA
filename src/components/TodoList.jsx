import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo }) {
  // Priority '1' is high, so ascending order puts high at the top
  const sortedTodos = [...todos].sort((a, b) => Number(a.priority) - Number(b.priority));
  const doneCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className='card'>
      <div className='card-header d-flex justify-content-between align-items-center'>
        <span>📋 View Todos</span>
        {todos.length > 0 && (
          <span className='todo-count'>{doneCount} of {todos.length} done</span>
        )}
      </div>
      {todos.length === 0 ? (
        <div className='card-body empty-state'>
          <div className='empty-emoji' aria-hidden='true'>🎉</div>
          <strong>Welcome to Very Simple Todo App!</strong>
          <p className='mb-0'>Get started now by adding a new todo on the left.</p>
        </div>
      ) : (
        <ul className='list-group list-group-flush'>
          {sortedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
