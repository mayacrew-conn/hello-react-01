import React, { PureComponent } from 'react';
import Counter from './Counter';

class Cart extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Cart make');
  }
  componentDidMount() {
    console.log('Cart mount');
  }
  componentDidUpdate() {
    console.log('Cart update');
  }
  state = {
    number: 0
  }
  render() {
    const { item } = this.props; 
    return (
      <div style={{width: 600, justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <h4>{item.name}</h4>
        <span>{item.price}</span>
        <Counter number={this.state.number} handleChange={this.handleChange}/>
        <div>{item.price * this.state.number}</div>
      </div>
    )
  }
  handleChange = (number) => {
    this.setState({number});
  }
}

export default Cart;