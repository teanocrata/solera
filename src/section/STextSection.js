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
            <h2>{this.props.text.title}</h2>
            <br />
            {this.props.text.pharagraphs.map(
              pharagraph =>
                pharagraph.size === "small" ? (
                  <p>
                    <small>{pharagraph.text}</small>
                  </p>
                ) : (
                  <p>{pharagraph.text}</p>
                )
            )}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default STextSection;
