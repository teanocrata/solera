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

test("SCarouselSection renders correctly with bodies", () => {
  const bodies = [
    {
      title: "Cheyenne",
      image: {
        src: "https://drive.google.com/uc?id=0BwBkl30bqN8KQUZselFVQmh3cHM"
      },
      text:
        "  Uno de nuestros caballos estrella, muy flexible, con doma western y clásica. Un excelente saltador aunque cuidado, ¡a veces tiene un carácter...!"
    }
  ];
  const section = renderer
    .create(<SCarouselSection bodies={bodies} />)
    .toJSON();
  expect(section).toMatchSnapshot();
});
