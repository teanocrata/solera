import React, { Component } from "react";
import ScrollUpButton from "react-scroll-up-button";

import SSection from "../section/SSection";
import STextSection from "../section/STextSection";
import SCarouselSection from "../section/SCarouselSection";
import SJumbo from "../jumbo/SJumbo";
import STimeline from "../timeline/STimeline";
import "./Page.css";

import page from "./page.json";

class Page extends Component {
  render() {
    return (
      <div>
        <SJumbo
          title={page.jumbo.title}
          callToAction={page.jumbo.callToAction}
        />
        <SSection activities={page.activities} />
        <STextSection text={page.text} />
        <SCarouselSection bodies={page.carouselBodies}/>
        <STimeline />
        <ScrollUpButton />
      </div>
    );
  }
}

export default Page;
