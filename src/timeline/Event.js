import React, { Component } from "react";

const styles = {
  img: {
    width: "100%"
  },
  card: {
    background: "lightgreen"
  }
};

class Event extends Component {
  render() {
    return (
      <div style={styles.card} icon={this.props.icon}>
        <h1>{this.props.title}</h1>
        <img style={styles.img} alt={this.props.title} src={this.props.img} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Event;
