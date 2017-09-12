import React, { Component } from "react";

import SSection from "../section/SSection";
import STextSection from "../section/STextSection";
import SCarouselSection from "../section/SCarouselSection";
import SJumbo from "../jumbo/SJumbo";
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
      </div>
    );
  }
}

export default Page;
