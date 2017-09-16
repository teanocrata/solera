import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import "./Product.css";

class Product extends Component {
  render() {
    const style = {
      image: {
        maxWidth: "150px",
        maxHeight: "150px"
      },
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "5% 5% 5% 5%"
      },
      imageContainer: {
        borderStyle: "solid",
        borderColor: "forestgreen",
        borderWidth: "5px",
        borderRadius: "50%",
        maxWidth: "250px",
        maxHeight: "250px"
      },
      text: {
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Shadows Into Light",
        fontWeight: "bold"
      }
    };
    return this.props.product ? (
      <Link
        className="product"
        style={style.container}
        to={this.props.product.path}
      >
        {this.props.product.image ? (
          <div style={style.imageContainer}>
            <Image style={style.image} src={this.props.product.image.src} />
          </div>
        ) : null}
        <h3 style={style.text}>{this.props.product.name}</h3>
      </Link>
    ) : null;
  }
}

export default Product;
