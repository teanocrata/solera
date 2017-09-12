import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SSection from "../SSection";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SSection />, div);
});

test("SSection renders correctly", () => {
  const section = renderer.create(<SSection />).toJSON();
  expect(section).toMatchSnapshot();
});
