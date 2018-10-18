import React, { Component } from 'react';
import './App.css';

import TodoApp from './todoapp';
// import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App make');
  }
  componentDidMount() {
    console.log('App mount');
  }
  componentDidUpdate() {
    console.log('App update');
  }
  state = {
    count: 0,
    items: [
      {name: 'test', price: 1234},
      {name: 'test2', price: 1240},
      {name: 'test3', price: 15234},
      {name: 'test4', price: 12345},
    ]
  }
  render() {
    // const cartElements = this.state.items.map((item) => {
    //   return <Cart key={item.name} item={item}/>
    // });
    return (
      <div>
        {/* { cartElements } */}
        {/* <Cart item={this.state.items[0]}/>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>plus</button> */}
        <TodoApp />
      </div>
    );
  }
}

export default App;
