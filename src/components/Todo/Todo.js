import React from 'react';
import { ReactComponent as CheckIcon } from '../../assets/images/check.svg';
import { ReactComponent as UncheckIcon } from '../../assets/images/uncheck.svg';
import { ReactComponent as RemoveIcon } from '../../assets/images/remove.svg';
import './TodoList.scss';

export const Todo = ({ index, todo, toggleCompleteTodo, removeTodo }) => {
  return (
    <div className="TodoList__inner">
      <p className={todo.isCompleted ? 'isCompleted' : null}>{todo.title}</p>
      <button onClick={() => toggleCompleteTodo(index)}>
        {todo.isCompleted ? (
          <UncheckIcon className="uncheck-icon" />
        ) : (
          <CheckIcon className="check-icon" />
        )}
      </button>
      <button onClick={() => removeTodo(index)}>
        <RemoveIcon className="remove-icon" />
      </button>
    </div>
  );
};
