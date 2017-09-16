import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SJumbo from "../SJumbo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SJumbo />, div);
});

test("SJumbo renders correctly", () => {
  const jumbo = renderer.create(<SJumbo />).toJSON();
  expect(jumbo).toMatchSnapshot();
});

test("SJumbo renders correctly with jumbo data", () => {
  const jumboData = {
    title: "Visitas guiadas",
    callToAction: "Ven a conocenos"
  };
  const jumbo = renderer.create(<SJumbo jumbo={jumboData} />).toJSON();
  expect(jumbo).toMatchSnapshot();
});

test("SJumbo renders correctly with call to acction", () => {
  const jumboData = {
    callToAction: "Ven a conocenos"
  };
  const jumbo = renderer.create(<SJumbo jumbo={jumboData} />).toJSON();
  expect(jumbo).toMatchSnapshot();
});

test("SJumbo renders correctly with title", () => {
  const jumboData = {
    title: "Visitas guiadas"
  };
  const jumbo = renderer.create(<SJumbo jumbo={jumboData} />).toJSON();
  expect(jumbo).toMatchSnapshot();
});
