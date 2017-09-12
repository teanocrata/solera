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
