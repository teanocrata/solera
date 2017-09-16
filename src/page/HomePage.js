import React, { Component } from "react";

import Product from "../items/Product";

class HomePage extends Component {
  render() {
    const style = {
      page: {
        paddingTop: "150px",
        // width: "100vw",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        verticalAlign: "middle",
        backgroundImage:
          "url('https://drive.google.com/uc?id=0BwBkl30bqN8Kbml0Z0dRUGg2Mjg')",
        width: "100vw",

        /* Create the parallax scrolling effect */
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
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
