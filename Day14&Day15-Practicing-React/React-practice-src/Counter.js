import React, { Component } from 'react'

// NUMBER OF CLICKS COUNTER    
export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfClicks: 0
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({numOfClicks: this.state.numOfClicks + 1})
  }


  render() {
    return (
      <div className="section">
          <h3>CLICK COUNTER</h3>
          <button onClick={this.handleClick}>Click Me!</button>
          <p>Number of Times Clicked = {this.state.numOfClicks}</p>
      </div>
    )
  }
}

export default Counter