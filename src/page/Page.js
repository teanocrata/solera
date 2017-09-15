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
    return (
      <div>
        <SJumbo />
        <br />
        <SSection />
        <STextSection />
        <SCarouselSection />
        <STimeline />
        <ScrollUpButton />
      </div>
    );
  }
}

export default Page;
