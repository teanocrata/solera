import React, { Component } from "react";

import SSection from "../section/SSection";
import STextSection from "../section/STextSection";
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
      </div>
    );
  }
}

export default Page;
