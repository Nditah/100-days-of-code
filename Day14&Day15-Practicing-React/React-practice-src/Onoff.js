// ON/OFF BUTTON

import React, { Component } from 'react'

export class Onoff extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
        <div className="section">
            <h3>ON/OFF BUTTON</h3>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
        </div>
    )
  }

// USING ARROW FUNCTION IN THE CALL BACK TO AVOID HAVING TO CALL BIND 
// render() {
//   return (
//   <button onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
//   )
// }
}

export default Onoff