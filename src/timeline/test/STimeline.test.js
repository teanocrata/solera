import React from "react";
import ReactDOM from "react-dom";
import STimeline from "../STimeline";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<STimeline />, div);
});

it("renders without crashing with events data", () => {
  const events = [
    {
      title: "¡Es la hora de la verdad!",
      image: {
        src: "https://drive.google.com/uc?id=0BwBkl30bqN8KVy01VzZkNkhPNk0"
      },
      text:
        "Montar a caballo es una actividad muy completa, activa todos los grupos musculares y en particular favorece movimientos propioceptivos que previenen lesiones en el día a día. Además el contacto con el animal hace de esta actividad algo incomparable, la conexión entre jinete y caballo hace de este momento algo muy especial, ¿estás preparado?"
    },
    {
      title: "Y por fin, un merecido descanso",
      image: {
        src: "https://drive.google.com/uc?id=0BwBkl30bqN8KV05GbjJTaTRVWlE"
      },
      text:
        "En solera disponemos de instalaciones para poder relajarte tras una jornada de entrenamiento, disfruta charlando o tomando algo fresquito. También disponemos de zona de juegos al aire libre para los más pequeños. Si has llegado hasta aquí recibirás un merecido detalle para que recuerdes nos recuerdes con cariño. Esperamos que hayas disfrutado tanto como nosotros de este día tan especial."
    }
  ];
  const div = document.createElement("div");
  ReactDOM.render(<STimeline events={events} />, div);
});
