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

test("SJumbo renders correctly with title", () => {
  const jumbo = renderer.create(<SJumbo title="Visitas guiadas" />).toJSON();
  expect(jumbo).toMatchSnapshot();
});

test("SJumbo renders correctly with call to acction", () => {
  const jumbo = renderer
    .create(<SJumbo callToAction="Ven a conocernos" />)
    .toJSON();
  expect(jumbo).toMatchSnapshot();
});

test("SJumbo renders correctly with call to acction", () => {
  const jumbo = renderer
    .create(<SJumbo title="Visitas guiadas" callToAction="Ven a conocernos" />)
    .toJSON();
  expect(jumbo).toMatchSnapshot();
});
