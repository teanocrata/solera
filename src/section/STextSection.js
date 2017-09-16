import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./STextSection.css";

class STextSection extends Component {
  render() {
    return this.props.text ? (
      <Grid fluid>
        <Row
          className="show-grid"
          style={{
            backgroundColor: "white"
          }}
        >
          <Col md={12} className="slideanim">
            <h2>{this.props.text.title}</h2>
            <br />
            {this.props.text.pharagraphs ? (
              this.props.text.pharagraphs.map(
                (pharagraph, index) =>
                  pharagraph.size === "small" ? (
                    <p key={index}>
                      <small>{pharagraph.text}</small>
                    </p>
                  ) : (
                    <p key={index}>{pharagraph.text}</p>
                  )
              )
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Grid>
    ) : null;
  }
}

export default STextSection;
