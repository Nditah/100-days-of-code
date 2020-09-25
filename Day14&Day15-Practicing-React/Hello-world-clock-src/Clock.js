// import React, { Component } from "react";

// FUNCTION
// export default function App(props) {
//   return <div>Hello, {props.name}</div>;
// }

// CLASS
// export class App extends Component {
//   render() {
//     return <div>Hello, {this.props.name}</div>;
//   }
// }

// export default App;

// CLOCK FUNCTION
// export default function App(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleString()}.</h2>
//     </div>
//   );
// }

// setInterval(App, 1000);

// ===========================================================

// CLOCK CLASS
import React, { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleString()}.</h2>
      </div>
    );
  }
}

export default Clock;

// ==============================================================
