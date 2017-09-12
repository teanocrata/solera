import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./SSection.css";
import ponyGirls from "./pony_girls_square.jpg";
import farmer from "./farmer_square.jpg";
import horseTraining from "./horse_training_square.jpg";

class SSection extends Component {
  render() {
    return (
      <Grid fluid>
        <Row
          className="show-grid"
          style={{
            backgroundColor: "white"
          }}
        >
          <Col md={4} className="slideanim">
            <Image src={ponyGirls} circle />
            <h3>Da de comer a los ponys</h3>
            <p>
              Los caballos y los ponys son animales muy sociables, detectan
              nuestras emociones y son muy curiosos, además ¡les encantan las
              frutisinas!
            </p>
          </Col>
          <Col md={4} className="slideanim">
            <Image src={farmer} circle />
            <h3>Conoce nuestro día a día</h3>
            <p>
              Una escuela de equitación tiene muchas actividades, desde hacer
              las camas, la comida o salir a jugar ¡igual que en casa!
            </p>
          </Col>
          <Col md={4} className="slideanim">
            <Image src={horseTraining} circle />
            <h3>Monta en uno de nuestros ponys</h3>
            <p>
              La actividad estrella de nuestra visita, descubre la sensación de
              conectar con un pony, verás como te conoce, te escucha, y
              disfrutaréis juntos.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SSection;
