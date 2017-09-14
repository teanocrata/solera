import React, { Component } from "react";
import { Timeline } from "react-dual-timeline";
import { StyleRoot } from "radium";

import Event from "./Event";

import environment from "./img/environment.jpg";
import horses from "./img/horses.jpg";
import boxes from "./img/boxes.png";
import training from "./img/training.jpg";
import relaxtime from "./img/relaxtime.jpg";

class STimeline extends Component {
  render() {
    return (
      <StyleRoot>
        <Timeline activeColor="lightgreen">
          <Event
            title="Llegada a Solera"
            img={environment}
            description="Nuestra visita empieza con la llegada a la Solera, el centro hípico está situado a unos 15 km de Madrid, en la orilla del río Jarama, un entorno privilegiado que nos permite disfrutar del campo sin apenas alejarnos de Madrid."
          />
          <Event
            title="Conoce a nuestros caballos"
            img={horses}
            description="Los casi 20 caballos y 4 ponys de Solera se cuidan como si fueran deportistas de élite, a través del seguimiento de una serie de buenas prácticas de la doma natural y alimentándolos con productos propios evitando aditivos artificiales."
          />
          <Event
            title="¿Sabes lo que es la doma natural?"
            img={boxes}
            description="La doma natural intenta plantear la relación hombre-caballo desde ideas como la amistad y la asimilación de las bases del comportamiento del animal en libertad. Una tradición que viene de antiguo y que, hoy en día, se intenta conceptualizar para poder aplicarla en nuestro trabajo con los caballos."
          />
          <Event
            title="¡Es la hora de la verdad!"
            img={training}
            description="Montar a caballo es una actividad muy completa, activa todos los grupos musculares y en particular favorece movimientos propioceptivos que previenen lesiones en el día a día. Además el contacto con el animal hace de esta actividad algo incomparable, la conexión entre jinete y caballo hace de este momento algo muy especial, ¿estás preparado?"
          />
          <Event
            title="Y por fin, un merecido descanso"
            img={relaxtime}
            description="En solera disponemos de instalaciones para poder relajarte tras una jornada de entrenamiento, disfruta charlando o tomando algo fresquito. También disponemos de zona de juegos al aire libre para los más pequeños. Si has llegado hasta aquí recibirás un merecido detalle para que recuerdes nos recuerdes con cariño. Esperamos que hayas disfrutado tanto como nosotros de este día tan especial."
          />
        </Timeline>
      </StyleRoot>
    );
  }
}

export default STimeline;
