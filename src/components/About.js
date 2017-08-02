import React from "react";
import Skills from "./Skills";

const About = props => {
  return (
    <section className="about column-wrapper">
      <div className="profile">
        <img
          alt='image of developer'
          className="developer-img"
          src={require("../images/developer-img.jpg")}
        />
        <p className="bio">
        Hi, my name is Juan John-Charles. I am a certified full-stack web-developer and a graduate of Rutgers University Coding Boot Camp. 
        Driven by a self-imposed commitment to improving every day, and having an insatiable hunger to 
        learn and grow in my coding abilities, I am an avid consumer of a wide array of resources, from 
        paid online courses to tutorials, to books. I am available for work, so if you're interested feel 
        free to get in touch. 
        </p>
      </div>
      <Skills />
    </section>
  );
};
export default About;
