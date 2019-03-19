import React, { Component } from "react";
import "./App.css";
import DisplayCurrent from "./components/DisplayCurrent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="header">
            <div><h1 className='home'>Home</h1></div>
          </header>
        </div>
        <DisplayCurrent />
      </div>
    );
  }
}

export default App;
