import React, { Component } from 'react';
import gh from './gh.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        created by jspeda
        <a href="https://www.github.com/jspeda"><img src={gh} className="github" alt="github" /></a>
      </div>
    );
  }
};

export default Footer;
