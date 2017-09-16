import React, { Component } from "react";
import { Timeline } from "react-dual-timeline";
import { StyleRoot } from "radium";

import Event from "./Event";

class STimeline extends Component {
  render() {
    return this.props.events ? (
      <StyleRoot>
        <Timeline activeColor="lightgreen">
          {this.props.events.map(event => (
            <Event
              key={event.title}
              title={event.title}
              img={event.image.src}
              description={event.text}
            />
          ))}
        </Timeline>
      </StyleRoot>
    ) : null;
  }
}

export default STimeline;
