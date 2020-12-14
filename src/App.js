import React, { useEffect, useState } from 'react';
import './App.scss';
import { TodoForm } from './components/TodoForm/TodoFrom';
import { Todo } from './components/Todo/Todo';

const initialState = () => {
  return [
    { title: 'Move on to the next task', isCompleted: false },
    { title: 'Make a to-do', isCompleted: true },
  ];
};

const App = () => {
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    const data = localStorage.getItem('to-do-list');
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('to-do-list', JSON.stringify(todos));
  });

  const addTodo = (title) => {
    const newTodo = [...todos, { title, isCompleted: false }];
    setTodos(newTodo);
  };

  const toggleCompleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted
      ? (newTodo[index].isCompleted = false)
      : (newTodo[index].isCompleted = true);
    setTodos(newTodo);
  };

  const removeTodo = (removeIndex) => {
    const newTodo = todos.filter((todo, index) => index !== removeIndex);
    setTodos([...newTodo]);
  };

  return (
    <div className="App">
      <div className="TodoList">
        {todos.length === 0 ? (
          <div>Forgot to add a task, mate.</div>
        ) : (
          todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              toggleCompleteTodo={toggleCompleteTodo}
              removeTodo={removeTodo}
            />
          ))
        )}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
