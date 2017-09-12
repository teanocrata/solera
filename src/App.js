import React, { Component } from "react";
import "./App.css";
import SNavbar from "./navbar/SNavbar";
import Page from "./page/Page";

class App extends Component {
  render() {
    return (
      <div>
        <SNavbar />
        <Page />
      </div>
    );
  }
}

export default App;
