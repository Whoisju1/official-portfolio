import React from "react";

// import components for main page
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

var Scroll    = require('react-scroll');

var Element    = Scroll.Element;

// =====================================================

export const MainPage = props => {
  return (
    <div className="main-page">
     <Element name='about'> <About /></Element>
      <Element name='portfolio'><Portfolio /></Element>
      <Element name='contact'><Contact /></Element>
    </div>
  );
};

export default MainPage;
