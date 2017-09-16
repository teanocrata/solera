import React, { Component } from "react";

import Product from "../items/Product";

class HomePage extends Component {
  render() {
    const style = {
      page: {
        paddingTop: "40px",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        verticalAlign: "middle"
      }
    };

    return (
      <div style={style.page}>
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
