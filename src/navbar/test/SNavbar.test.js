import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SNavbar from "../SNavbar";
import logo from "./logo.svg";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <SNavbar />
    </MemoryRouter>,
    div
  );
});

test("SNavbar renders correctly", () => {
  const app = renderer
    .create(
      <MemoryRouter>
        <SNavbar />
      </MemoryRouter>
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});

test("SNavbar renders correctly with logo", () => {
  const app = renderer
    .create(
      <MemoryRouter>
        <SNavbar logo={logo} />
      </MemoryRouter>
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});

test("SNavbar renders correctly with logo and no items", () => {
  const items = [];
  const app = renderer
    .create(
      <MemoryRouter>
        <SNavbar logo={logo} items={items} />
      </MemoryRouter>
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});

test("SNavbar renders correctly with logo and valid items", () => {
  const items = [
    {
      link: "https://www.clasesdeequitacionmadrid.com/instalaciones-hipica",
      text: "Instalaciones"
    },
    {
      link: "https://www.clasesdeequitacionmadrid.com/clases-de-equitacion",
      text: "Clases"
    }
  ];
  const app = renderer
    .create(
      <MemoryRouter>
        <SNavbar logo={logo} items={items} />
      </MemoryRouter>
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});

test("SNavbar renders correctly with logo and valid nested item", () => {
  const items = [
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
  const app = renderer
    .create(
      <MemoryRouter>
        <SNavbar logo={logo} items={items} />
      </MemoryRouter>
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});
