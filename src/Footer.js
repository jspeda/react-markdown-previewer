import React from 'react';
import gh from './gh.png'

const Footer = () => {
  return (
    <div className="footer">
      created by jspeda
      <a href="https://www.github.com/jspeda"><img src={gh} className="github" alt="github" /></a>
    </div>
  );
};

export default Footer;
