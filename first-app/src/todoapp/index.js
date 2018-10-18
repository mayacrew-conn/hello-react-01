import React from 'react';
import './index.css';

import TodoList from './TodoList';
import Form from './Form';
import ColorSelector from './ColorSelector';

class TodoApp extends React.PureComponent {
  inputDOM = null;
  input = '';
  id = 4;
  state = {
    color: '',
    datas: [
      { id: 1, title: '리액트 소개', color: '#000', checked: false },
      { id: 2, title: 'JSX', color: '#000', checked: true },
      { id: 3, title: '라이프사이클', color: '#000', checked: false },
    ],
    colors: [
      { id:1, color: '#a51' },
      { id:2, color: '#51a' },
      { id:3, color: '#1a5' },
      { id:4, color: '#15a' },
    ]
  };
  render() {
    const { datas, colors } = this.state;
    return (
      <div className="todo-app">
        <header>
          <h1>오늘 할 일</h1>
        </header>
        <ColorSelector colors={colors} toggleColor={this.toggleColor}/>
        <Form handleChange={this.handleChange} handleAdd={this.handleAdd} handleInput={this.handleInput}/>
        <TodoList datas={datas} toggleChecked={this.toggleChecked} toggleDelete={this.toggleDelete}/>
      </div>
    );
  }
  toggleColor = (color) => {
    console.log(color)
    this.setState({color: color});
  }
  handleInput = (inputDOM) => {
    this.inputDOM = inputDOM;
  }
  handleChange = (value) => {
    this.input = value;
  }
  handleAdd = () => {
    const { datas, color } = this.state;
    const newDatas = [
      ...datas,
    ];
    newDatas.push({ id: this.id++, title: this.input, color: color, checked: false })
    this.setState({datas: newDatas});
    this.inputDOM.value = '';

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
