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

test("SSection renders correctly with activities", () => {
  const activities = [
    {
      title: "Da de comer a los ponys",
      text:
        "Los caballos y los ponys son animales muy sociables, detectan nuestras emociones y son muy curiosos, además ¡les encantan las frutisinas!",
      image: {
        name: "ponyGirls",
        src: "https://drive.google.com/uc?id=0BwBkl30bqN8KQnc3U1hRM1o2MWs"
      }
    },
    {
      title: "Conoce nuestro día a día",
      text:
        "Una escuela de equitación tiene muchas actividades, desde hacer las camas, la comida o salir a jugar ¡igual que en casa!",
      image: {
        name: "farmer",
        src: "https://drive.google.com/uc?id=0BwBkl30bqN8KRXVPX0RMakNiajA"
      }
    }
  ];
  const section = renderer
    .create(<SSection activities={activities} />)
    .toJSON();
  expect(section).toMatchSnapshot();
});

test("SSection renders correctly with only titled activities", () => {
  const activities = [
    {
      title: "Da de comer a los ponys"
    },
    {
      title: "Conoce nuestro día a día"
    }
  ];
  const section = renderer
    .create(<SSection activities={activities} />)
    .toJSON();
  expect(section).toMatchSnapshot();
});
