import React from "react";
import ReactDOM from "react-dom";
import STimeline from "../STimeline";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<STimeline />, div);
});
