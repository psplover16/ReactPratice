import "./app.css";
// import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
// class App extends React.Component {
export default class App extends Component {
  render() {
    return (
      <div>
        123456
        <img src={logo} alt={logo}/>
      </div>
    );
  }
}

// export default App;  //跟上面的export default 挑一個寫
