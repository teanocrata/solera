import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./SSection.css";

class SSection extends Component {
  render() {
    const style = {
      image: {
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
      }
    };
    return this.props.activities ? (
      <Grid fluid>
        {
          <Row
            className="show-grid"
            style={{
              backgroundColor: "white"
            }}
          >
            {this.props.activities.map(activity => (
              <Col key={activity.title} md={4} className="slideanim">
                {activity.image ? (
                  <Image style={style.image} src={activity.image.src} circle />
                ) : (
                  ""
                )}
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
              </Col>
            ))}
          </Row>
        }
      </Grid>
    ) : null;
  }
}

export default SSection;
