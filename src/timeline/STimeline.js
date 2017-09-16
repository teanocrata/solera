import React, { Component } from "react";
import { Timeline } from "react-dual-timeline";
import { StyleRoot } from "radium";

import Event from "./Event";

class STimeline extends Component {
  render() {
    return (
      <StyleRoot>
        <Timeline activeColor="lightgreen">
          {this.props.events ? (
            this.props.events.map(event => (
              <Event
                key={event.title}
                title={event.title}
                img={event.image.src}
                description={event.text}
              />
            ))
          ) : (
            <Event />
          )}
        </Timeline>
      </StyleRoot>
    );
  }
}

export default STimeline;
