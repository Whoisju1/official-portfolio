import React from "react";

// let transitions = null;

export class Work extends React.Component {
  componentWillMount() {}

  constructor(props) {
    super(props);
    this.state = {
      fontSize: "90px",
      color: "#3498db",
      opacity: 1,
      transform: null
    };
  }

  handleEnter() {
    this.setState({
      opacity: 0,
      transform: " scale(1.3)",
      color: "#0d3048"
    });
  }

  handleLeave() {
    this.setState({
      fontSize: "90px",
      color: "#3498db",
      opacity: ".8",
      transform: "scale(1)"
    });
  }

  render() {
    return (
      <div
        className="work-wrapper"
        key={this.props.name}
        onMouseEnter={() => this.handleEnter()}
        onMouseLeave={() => this.handleLeave()}
      >
        <div className="project-name">
          {this.props.name}
        </div>
        <div className="work-bkg" style={this.state}>
          &lt;/&gt;
        </div>
        <a
          className="github-link project-link"
          href={this.props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source code on Github
        </a>
        <a
          className="live-site project-link"
          href={this.props.heroku}
          target="_blank"
          rel="noopener noreferrer"
        >
          View live site
        </a>
      </div>
    );
  }
}

export default Work;
