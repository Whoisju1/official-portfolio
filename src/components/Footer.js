import React from 'react'

export const Footer = (props) => {



    return (
        <footer>
          &#169;{' '}
          { new Date().getFullYear() } Juan John-Charles
          <div className='online-presence'>
            <a href='https://github.com/Whoisju1' target='_blank' rel="noopener noreferrer" className='social-links'>
              <i className="fa fa-github social-logo fa-4x" aria-hidden="true"></i>
            </a>
            <a href='https://www.linkedin.com/in/whoisju1' target='_blank' rel="noopener noreferrer" className='social-links'>
              <i className="fa fa-linkedin-square social-logo fa-4x" aria-hidden="true"></i>
            </a>
            <a href='https://stackoverflow.com/story/whoisju1' target='_blank' rel="noopener noreferrer" className='social-links'>
              <i className="fa fa-stack-overflow social-logo fa-4x" aria-hidden="true"></i>
            </a>
          </div>
        </footer>
    )
}

export default Footer;