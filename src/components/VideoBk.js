import React from 'react';

class VideoBk extends React.Component {
  constructor() {
    super();
    // this.state = { someKey: 'someValue' };
  }

  render() {
    return (
            <video className='vid-background' loop autoPlay>
                <source src="../../public/video/MP4/Love-Coding.mp4" type="video/mp4" />
                <source src="/video/MP4/Love-Coding.mp4" type="video/mp4" />
                <source src="/video/OGV/Love-Coding.ogv" type="video/ogv" />
            </video>
    )
  }

}

export default VideoBk;
