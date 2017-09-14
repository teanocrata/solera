import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Event from "../Event";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Event />, div);
});

test("Event renders correctly", () => {
  const event = renderer.create(<Event />).toJSON();
  expect(event).toMatchSnapshot();
});
