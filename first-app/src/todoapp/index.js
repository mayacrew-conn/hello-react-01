import React from 'react';
import './index.css';

import TodoList from './TodoList';

class TodoApp extends React.PureComponent {
  state = {
    datas: [
      { id: 1, title: '리액트 소개', color: '#000', checked: false },
      { id: 2, title: 'JSX', color: '#000', checked: true },
      { id: 3, title: '라이프사이클', color: '#000', checked: false },
    ],
  };
  render() {
    const { datas } = this.state;
    return (
      <div className="todo-app">
        <header>
          <h1>오늘 할 일</h1>
        </header>
        {/* <ColorSelector />
        <Form /> */}
        <TodoList datas={datas} toggleChecked={this.toggleChecked} toggleDelete={this.toggleDelete}/>
      </div>
    );
  }
  toggleChecked = (idx) => {
    const { datas } = this.state;
    const newDatas = [
      ...datas,
    ];
    newDatas[idx].checked = !newDatas[idx].checked;
    this.setState({
      datas: newDatas,
    });
  };
  toggleDelete = (idx) => {
    const { datas } = this.state;
    const newDatas = [
      ...datas,
    ];
    newDatas.splice(idx, 1);
    this.setState({
      datas: newDatas,
    })
  };
}

export default TodoApp;
