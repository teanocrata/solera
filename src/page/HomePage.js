import React, { Component } from "react";

import Product from "../items/Product";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    const style = {
      page: {
        paddingTop: "50px",
        // width: "100vw",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        verticalAlign: "middle"
      }
    };

    return (
      <div className="circle-container" style={style.page}>
        {this.props.products ? (
          this.props.products.map(product => (
            <Product key={product.name} product={product} />
          ))
        ) : (
          <h1>"Not enought products"</h1>
        )}
      </div>
    );
  }
}

export default HomePage;
