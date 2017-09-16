import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";

import "./SCarouselSection.css";

class SCarouselSection extends Component {
  render() {
    const style = {
      image: {
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
      }
    };
    return this.props.bodies ? (
      <Carousel>
        {this.props.bodies.map(body => (
          <Carousel.Item key={body.title}>
            <div
              style={{
                height: 500,
                width: "100%",
                backgroundColor: "transparent"
              }}
            >
              <Image style={style.image} src={body.image.src} circle />
            </div>
            <Carousel.Caption>
              <h3>{body.title}</h3>
              <p>{body.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    ) : null;
  }
}

export default SCarouselSection;
