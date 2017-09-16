import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import SNavbar from "./navbar/SNavbar";
import Page from "./page/Page";
import logo from "./solera_logo_80x80_green.png";

import meetUs from "./resources/pages/guidedVisits.json";
import lessons from "./resources/pages/lessons.json";
import page from "./resources/pages/page.json";

class App extends Component {
  render() {
    const routes = [
      {
        path: "/guidedVisits",
        main: () => <Page page={meetUs} />,
        text: "¡Conócenos!"
      },
      {
        path: "/lessons",
        main: () => <Page page={lessons} />,
        text: "Clases"
      },
      {
        path: "/ponies",
        main: () => <Page page={page} />,
        text: "Ponies"
      },
      {
        path: "/birthdays",
        main: () => <Page page={page} />,
        text: "Cumpleaños"
      },
      {
        path: "/stabling",
        main: () => <Page page={page} />,
        text: "Pupilaje"
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
