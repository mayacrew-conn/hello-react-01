import React from 'react';

class Counter extends React.Component {
  static defaultProps = {
    number: 0
  };
  constructor(props) {
    super(props);
    console.log('Counter make');
  }
  componentDidMount() {
    console.log('Counter mount');
  }
  componentDidUpdate() {
    console.log('Counter update');
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.number === this.props.number) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        <button onClick={this.handleMinus}>-</button>
        <input 
          type="number" 
          value={this.props.number} 
          onChange={(evt) => this.props.handleChange(evt.target.value)} />
        <button onClick={this.handleAdd}>+</button>
      </div>
    );
  }
  handleMinus = () => {
    this.props.handleChange(this.props.number - 1);
  };
  handleAdd = () => {
    this.props.handleChange(this.props.number + 1);
  };
}

export default Counter;
