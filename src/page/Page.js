import React, { Component } from "react";
import ScrollUpButton from "react-scroll-up-button";

import SSection from "../section/SSection";
import STextSection from "../section/STextSection";
import SCarouselSection from "../section/SCarouselSection";
import SJumbo from "../jumbo/SJumbo";
import STimeline from "../timeline/STimeline";
import "./Page.css";

class Page extends Component {
  render() {
    return this.props.page ? (
      <div>
        <SJumbo jumbo={this.props.page.jumbo} />
        <SSection activities={this.props.page.activities} />
        <STextSection text={this.props.page.text} />
        <SCarouselSection bodies={this.props.page.carouselBodies} />
        <STimeline events={this.props.page.events} />
        <ScrollUpButton />
      </div>
    ) : null;
  }
}

export default Page;
