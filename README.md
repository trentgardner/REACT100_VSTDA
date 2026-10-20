# Very Simple Todo App (VSTDA)

A small React app for tracking todos, built with Vite and styled with Bootstrap 5.

## Features

- Add a todo with a description and a priority (High, Medium, Low)
- Todos are color-coded by priority (`priority-high`, `priority-medium`, `priority-low`)
- Edit a todo's text and priority in place
- Mark a todo complete (shown with a strikethrough)
- Delete a todo
- A welcome message appears when the list is empty

## Getting Started

```bash
npm install
npm run dev
```

## Tests

```bash
npm test           # Vitest with the browser UI
npx vitest run     # run once in the terminal
```

## Project Structure

- `src/App.jsx`: holds the todo list state and the add/update/delete functions
- `src/components/TodoForm.jsx`: the form for creating new todos
- `src/components/TodoList.jsx`: renders the list, or the welcome message when it's empty
- `src/components/TodoItem.jsx`: a single todo, with view and edit modes
