import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SCarouselSection from "../SCarouselSection";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SCarouselSection />, div);
});

test("SCarouselSection renders correctly", () => {
  const section = renderer.create(<SCarouselSection />).toJSON();
  expect(section).toMatchSnapshot();
});
