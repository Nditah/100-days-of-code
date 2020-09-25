// GREETING

import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { isGuest: true};

        this.guestClick = this.guestClick.bind(this);
        this.loggedClick = this.loggedClick.bind(this);
    }

  guestClick() {
      this.setState({isGuest: true})
  }
  loggedClick() {
      this.setState({isGuest: false})
  }

    render() {
        return (
            <div className="section">
                <button onClick={this.guestClick}>I'm a guest</button>
                <button onClick={this.loggedClick}>I'm logged in</button>
                <h1>{this.state.isGuest ? 'Please Sign Up' : 'Welcome Back!'}</h1>
            </div>
        )
    }
}

export default Greeting

