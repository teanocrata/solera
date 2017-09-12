import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./STextSection.css";

class STextSection extends Component {
  render() {
    return (
      <Grid fluid>
        <Row
          className="show-grid"
          style={{
            backgroundColor: "white"
          }}
        >
          <Col md={12} className="slideanim">
            <h2>Bienvenidos</h2>
            <br />
            <p>
              Visita nuestra escuela y disfruta de una agradable sensación de
              calma y tranquilidad en el campo.
            </p>
            <p>
              Verás cómo viven nuestros caballos, conocerás los diferentes
              trabajos que hacemos con ellos, las distintas clases de domas y
              por qué nosotros optamos por la doma natural y muchas más
              curiosidades.
            </p>
            <p>
              <small>
                ¡Y podrás probar lo que significa conectar con un animal!
              </small>
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default STextSection;
