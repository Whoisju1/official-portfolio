import React from "react";
import Work from "./Work";

const workList = [
  {
    appName: "GifItToMe",
    sourceCode: "https://github.com/Whoisju1/GifItToMe.git",
    herokuLink: "https://giftome.herokuapp.com"
  },
  {
    appName: "JobNotes (Incomplete)",
    sourceCode: "https://github.com/Whoisju1/JobNotes.git",
    herokuLink: "http://jobnotes.herokuapp.com"
  },
  {
    appName: "News Grubber",
    sourceCode: "https://github.com/Whoisju1/News-Grubber.git",
    herokuLink: "https://news-grubber.herokuapp.com"
  }
];

export const WorkDone = props => {
  const createWork = () => {
    return workList.map(app => {
      return (
        <Work
          key={app.appName}
          name={app.appName}
          github={app.sourceCode}
          heroku={app.herokuLink}
        />
      );
    });
  };

  return (
    <div className="work-done-container">
      <div className="work-list">
        {createWork()}
      </div>
    </div>
  );
};

export default WorkDone;
