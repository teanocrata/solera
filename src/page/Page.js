import React, { Component } from "react";

import SSection from "../section/SSection";
import SJumbo from "../jumbo/SJumbo";
import "./Page.css";

class Page extends Component {
  render() {
    return (
      <div>
        <SJumbo />
        <br />
        <SSection />
      </div>
    );
  }
}

export default Page;
