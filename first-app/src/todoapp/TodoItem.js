import React from 'react';
import './TodoItem.css';

const TodoItem = ({item, toggleChecked, toggleDelete}) => {
  return (
    <div className='todo-item' onClick={toggleChecked}>
      <div className='item'>
        <button onClick={(evt)=> {
          evt.stopPropagation();
          toggleDelete();
        }}>X</button>
        <h4>{item.title}</h4>
      </div>
      {
        item.checked && 'V'
      }
    </div>
  )
}

export default TodoItem;

//splice