import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("App renders correctly", () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
