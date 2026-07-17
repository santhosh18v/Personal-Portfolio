import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Thunga Santhosh Kumar Reddy. All rights reserved.</p>
        <p className="footer-built">AI Engineer | Full Stack Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
