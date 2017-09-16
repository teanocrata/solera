import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./SJumbo.css";

class SJumbo extends Component {
  render() {
    const style = {
      jumbo: {
        backgroundColor: "transparent",
        height: this.props.heightPercentage
      },
      button: {
        backgroundColor: "lightgreen",
        color: "forestgreen",
        border: "none",
        boxShadow:
          "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        margin: "25% 0 25% 0",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "35px"
      }
    };
    return (
      <Jumbotron className="text-center" style={style.jumbo}>
        <div>
          <h1>{this.props.title}</h1>
          <p>
            <Button style={style.button} bsSize="large">
              {this.props.callToAction}
            </Button>
          </p>
        </div>
      </Jumbotron>
    );
  }
}

export default SJumbo;
