import React from "react";
var Scroll = require("react-scroll");
var Link = Scroll.Link;

export const LandingPage = props => {
  return (
    <div className="landing-page">
      <p className="landing-page-text">
        <span className="special-text">Web development</span> that makes Spider
        Man jealous. ;-&#41;
      </p>
      <div
        id="landing-page-background"
      />
      <Link
        activeClass="active"
        className="contact-link"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div className="down-arrow" href="#about">
          <i
            className="fa fa-chevron-down fa-3x down-arrow"
            aria-hidden="true"
          />
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
