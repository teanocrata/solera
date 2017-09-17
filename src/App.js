import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import SNavbar from "./navbar/SNavbar";
import Page from "./page/Page";
import HomePage from "./page/HomePage";
import logo from "./solera_logo_80x80_green.png";

import meetUs from "./resources/pages/guidedVisits.json";
import lessons from "./resources/pages/lessons.json";
import ponies from "./resources/pages/ponies.json";
import birthdays from "./resources/pages/birthdays.json";
import page from "./resources/pages/page.json";

class App extends Component {
  render() {
    const products = [
      {
        path: "/guidedVisits",
        main: () => <Page page={meetUs} />,
        name: "¡Conócenos!",
        image: {
          src: "https://drive.google.com/uc?id=0BwBkl30bqN8KTm0wbmhfLXBJQ3M"
        }
      },
      {
        path: "/lessons",
        main: () => <Page page={lessons} />,
        name: "Clases",
        image: {
          src: "https://drive.google.com/uc?id=0BwBkl30bqN8KTm0wbmhfLXBJQ3M"
        }
      },
      {
        path: "/ponies",
        main: () => <Page page={ponies} />,
        name: "Ponies",
        image: {
          src: "https://drive.google.com/uc?id=0BwBkl30bqN8KWkUwTXBhQ0FtWG8"
        }
      },
      {
        path: "/birthdays",
        main: () => <Page page={birthdays} />,
        name: "Cumpleaños",
        image: {
          src: "https://drive.google.com/uc?id=0BwBkl30bqN8KTm0wbmhfLXBJQ3M"
        }
      },
      {
        path: "/stabling",
        main: () => <Page page={page} />,
        name: "Pupilaje",
        image: {
          src: "https://drive.google.com/uc?id=0BwBkl30bqN8KTm0wbmhfLXBJQ3M"
        }
      }
    ];
    return (
      <Router basename="/solera">
        <div>
          <SNavbar logo={logo} routes={products} />
          <Route
            exact={true}
            path="/"
            component={() => <HomePage products={products} />}
          />
          {products.map((route, index) => (
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
