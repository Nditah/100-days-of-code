
// INCREMENT/ DECREMENT BUTTONS
import React, { Component } from 'react'

export class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment = () => {
    // PASSING IN A FUNCTION TO UPDATE STATES MULTIPLE TIMES
    this.setState((prevState) => ({count: prevState.count + 1}))
    this.setState((prevState) => ({count: prevState.count + 1}))
    this.setState((prevState) => ({count: prevState.count + 1}))
  }
  decrement() {
    // PASSING IN AN OBJECT
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div className="section">
          <h3>INCREMENT/ DECREMENT </h3>
      <button onClick={this.increment}>Increment by 3</button>
      <button onClick={this.decrement}>Decrement by 1</button>
      <br/>
      <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default Increment



