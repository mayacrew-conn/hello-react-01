import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.PureComponent {
  render() {
    const { datas, toggleChecked, toggleDelete } = this.props;
    const todoitems = datas.map((item, idx) => {
      return <TodoItem key={item.id} item={item} toggleChecked={() => toggleChecked(idx)} toggleDelete={() => toggleDelete(idx)}/>
    });
    return (
      <div>
        {todoitems}
      </div>
    );
  }
}

export default TodoList;