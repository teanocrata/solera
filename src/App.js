import React, { Component } from "react";
import "./App.css";
import SNavbar from "./navbar/SNavbar";
import Page from "./page/Page";
import logo from "./solera_logo_80x80_green.png";

class App extends Component {
  render() {
    const items = [
      {
        link: "https://www.clasesdeequitacionmadrid.com/instalaciones-hipica",
        text: "Instalaciones"
      },
      {
        link: "https://www.clasesdeequitacionmadrid.com/clases-de-equitacion",
        text: "Clases"
      },
      {
        link: "https://www.clasesdeequitacionmadrid.com/pupilaje",
        text: "Pupilaje"
      },
      {
        items: [
          {
            link:
              "https://www.clasesdeequitacionmadrid.com/cumpleanos-con-caballos",
            text: "Cumpleaños"
          },
          {
            link: "https://www.clasesdeequitacionmadrid.com/campamento-hipico",
            text: "Campamentos"
          }
        ],
        text: "Actividades"
      },
      {
        link: "https://www.clasesdeequitacionmadrid.com/blog",
        text: "Blog"
      }
    ];
    return (
      <div>
        <SNavbar logo={logo} items={items} />
        <Page />
      </div>
    );
  }
}

export default App;
