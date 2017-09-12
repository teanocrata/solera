import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";
import campera from "./campera_square.jpg";
import pixie from "./pixie_square.jpg";
import cheyenne from "./cheyenne_square.jpg";

import "./SCarouselSection.css";

class SCarouselSection extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div
            style={{
              height: 500,
              width: "100%",
              backgroundColor: "transparent"
            }}
          >
            <Image src={cheyenne} circle />
          </div>
          <Carousel.Caption>
            <h3>Cheyenne</h3>
            <p>
              Uno de nuestros caballos estrella, muy flexible, con doma western
              y clásica. Un excelente saltador aunque cuidado, ¡a veces tiene un
              carácter...!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              height: 500,
              width: "100%",
              backgroundColor: "transparent"
            }}
          >
            <Image src={pixie} circle />
          </div>
          <Carousel.Caption>
            <h3>Pixie</h3>
            <p>
              Un caballo pequeñito, casi un pony, super noble, tranquilo y
              adaptándose a todas las situaciones, tanto en pista como en el
              campo. Muy divertido y juguetón.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              height: 500,
              width: "100%",
              backgroundColor: "transparent"
            }}
          >
            <Image src={campera} circle />
          </div>
          <Carousel.Caption>
            <h3>Campera</h3>
            <p>
              Especialista en rutas por el campo, ¡es enorme!, al principio
              impone un poco pero es un pedazo de pan. En la pista es
              espectacular, eso si, tienes que estar bien en forma ;)
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default SCarouselSection;
