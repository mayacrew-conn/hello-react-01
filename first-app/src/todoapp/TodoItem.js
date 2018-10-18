import React from 'react';
import './TodoItem.css';

const TodoItem = ({item, toggleChecked}) => {
  return (
    <div className='todo-item' onClick={toggleChecked}>
      <div className='item'>
        <button>X</button>
        <h4>{item.title}</h4>
      </div>
      {
        item.checked && 'V'
      }
    </div>
  )
}

export default TodoItem;