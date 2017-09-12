import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import STextSection from "../STextSection";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<STextSection />, div);
});

test("STextSection renders correctly", () => {
  const section = renderer.create(<STextSection />).toJSON();
  expect(section).toMatchSnapshot();
});
