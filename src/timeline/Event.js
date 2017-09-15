import React, { Component } from "react";

const styles = {
  img: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    outline: "1px dashed white",
    outlineOffset: "-8px"
  },
  card: {
    background: "lightgreen"
  },
  title: {
    fontFamily: "Shadows Into Light",
    textTransform: "uppercase",
    color: "forestgreen",
    textAlign: "left"
  }
};

class Event extends Component {
  render() {
    return (
      <div style={styles.card} icon={this.props.icon}>
        <h1 style={styles.title}>{this.props.title}</h1>
        <img style={styles.img} alt={this.props.title} src={this.props.img} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Event;
