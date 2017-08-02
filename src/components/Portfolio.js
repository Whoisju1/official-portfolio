import React from "react";
import WorkDone from "./WorkDone";

export const Portfolio = props => {
  return (
    <section className="portfolio">
      <h1 className="work-heading">Take a look at some of my work</h1>
      <div className="portfolio-content-wrapper">
        <WorkDone />
      </div>
    </section>
  );
};

export default Portfolio;
