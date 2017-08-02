import React from "react";

var Scroll = require("react-scroll");

var Link = Scroll.Link;
var Events = Scroll.Events;
var scrollSpy = Scroll.scrollSpy;

class Nav extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
    // this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      // console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              className="about-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>

            <Link
              activeClass="active"
              className="portfolio-link"
              to="portfolio"
              spy={true}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="contact-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
