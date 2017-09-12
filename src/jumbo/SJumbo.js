import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./SJumbo.css";

class SJumbo extends Component {
  render() {
    return (
      <Jumbotron
        className="text-center"
        style={{
          backgroundColor: "transparent",
          height: this.props.heightPercentage
        }}
      >
        <div>
          <h1>Visitas guiadas</h1>
          <p>
            <Button>Ven a conocernos</Button>
          </p>
        </div>
      </Jumbotron>
    );
  }
}

export default SJumbo;
