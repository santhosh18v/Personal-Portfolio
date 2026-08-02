import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section section">
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <p className="hero-eyebrow">Hello, I'm</p>
          <h1 className="hero-title">Thunga Santhosh Kumar Reddy</h1>
          <h2 className="hero-subtitle">AI Engineer <span aria-hidden="true">|</span> Full Stack Developer</h2>
          
          <p className="hero-description">
            I design and build AI-powered applications and scalable web solutions with modern JavaScript, TypeScript, backend APIs, databases, and machine learning technologies.
          </p>

          <div className="hero-actions">
            <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-primary">
              Contact Me
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-80} className="btn btn-outline">
              View Work
            </Link>
            <div className="hero-socials">
              <a href="https://github.com/santhosh18v" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub profile">
                <Github size={24} aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/in/thunga-santhosh-reddy" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn profile">
                <Linkedin size={24} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="/Santhosh-Profile.png"
            alt="Thunga Santhosh Kumar Reddy - AI Engineer and Full Stack Developer"
            className="hero-profile-image"
            width="1024"
            height="1024"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
