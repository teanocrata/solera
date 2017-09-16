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

test("STextSection renders correctly with complete text data", () => {
  const text = {
    title: "Bienvenidos",
    pharagraphs: [
      {
        text:
          "Visita nuestra escuela y disfruta de una agradable sensación de calma y tranquilidad en el campo."
      },
      {
        text:
          "Verás cómo viven nuestros caballos, conocerás los diferentes trabajos que hacemos con ellos, las distintas clases de domas y por qué nosotros optamos por la doma natural y muchas más curiosidades.."
      },
      {
        text: "¡Y podrás probar lo que significa conectar con un animal!",
        size: "small"
      }
    ]
  };
  const section = renderer.create(<STextSection text={text} />).toJSON();
  expect(section).toMatchSnapshot();
});

test("STextSection renders correctly with text data without pharagraphs", () => {
  const text = {
    title: "Bienvenidos",
    pharagraphs: []
  };
  const section = renderer.create(<STextSection text={text} />).toJSON();
  expect(section).toMatchSnapshot();
});

test("STextSection renders correctly with text data without pharagraphs and title", () => {
  const text = {
    pharagraphs: []
  };
  const section = renderer.create(<STextSection text={text} />).toJSON();
  expect(section).toMatchSnapshot();
});

test("STextSection renders correctly with text data only with title", () => {
  const text = {
    title: "Bienvenidos"
  };
  const section = renderer.create(<STextSection text={text} />).toJSON();
  expect(section).toMatchSnapshot();
});
