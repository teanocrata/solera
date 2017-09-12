import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SNavbar from "../SNavbar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SNavbar />, div);
});

test("SNavbar renders correctly", () => {
  const app = renderer.create(<SNavbar />).toJSON();
  expect(app).toMatchSnapshot();
});
