import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  // clickHandler = event => console.log(event);
  // doubleClickHandler = () => alert("Double Clicked");
  // mouseEnterHandler = () => alert("Mouse Entered!");
  changeHandler = event => this.setState({ value: event.target.value });

  render() {
    return (
      <div className="App">
        <h1>Hello Handlers</h1>
        <h2>Lets build out some handler functions.</h2>
        <button onClick={this.clickHandler}>Click Handler Demo</button>
        <button onDoubleClick={this.doubleClickHandler}>
          Double Click Handler
        </button>
        <div onMouseEnter={this.mouseEnterHandler}>Mouse Leave</div>
        <input onChange={this.changeHandler} placeholder="Change my input" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
