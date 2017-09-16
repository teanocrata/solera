import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import SNavbar from "./navbar/SNavbar";
import Page from "./page/Page";
import logo from "./solera_logo_80x80_green.png";

import page from "./resources/pages/page.json";

class App extends Component {
  render() {
    const routes = [
      {
        path: "/",
        main: () => <Page page={page} />,
        text: "Home"
      }
    ];
    return (
      <Router>
        <div>
          <SNavbar logo={logo} routes={routes} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
