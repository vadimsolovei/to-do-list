import React, { useState } from 'react';
import { ReactComponent as AddIcon } from '../../assets/images/plus.svg';
import './TodoForm.scss';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={onHandleSubmit} className="TodoForm">
      <input type="text" value={value} onChange={onInputChange} />
      <button>
        <AddIcon className="add-icon" />
      </button>
    </form>
  );
};
