import React from 'react';
import { Download, FileText } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section section">
      <h2 className="section-title">About Me</h2>
      <h3 className="section-subtitle">Get to know me</h3>
      
      <div className="about-content glass">
        <div className="about-text">
          <p>
            I'm an aspiring AI Engineer and Full Stack Developer with experience designing and developing AI-powered applications and scalable web solutions. I work with JavaScript, TypeScript, Node.js, databases, REST APIs, authentication systems, artificial intelligence, and machine learning. I'm passionate about building innovative, user-focused products that solve real-world problems while continuously exploring modern AI technologies and software engineering practices.
          </p>
        </div>
        <div className="about-action">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FileText size={18} aria-hidden="true" />
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download="Thunga-Santhosh-Kumar-Reddy-Resume.pdf"
            className="btn btn-primary"
          >
            <Download size={18} aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
