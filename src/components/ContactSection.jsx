import React from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section">
      <h2 className="section-title">Let's work together</h2>
      <h3 className="section-subtitle">Get In Touch</h3>
      
      <div className="contact-container glass">
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Have a project in mind or want to collaborate? I'm always open to new opportunities — feel free to reach out.
            </p>

            <div className="contact-details">
              <a href="mailto:santhoshthunga297@gmail.com" className="contact-item">
                <div className="contact-icon"><Mail size={24} aria-hidden="true" /></div>
                <span>santhoshthunga297@gmail.com</span>
              </a>
              
              <a href="tel:+919014743783" className="contact-item">
                <div className="contact-icon"><Phone size={24} aria-hidden="true" /></div>
                <span>+91 9014743783</span>
              </a>

              <a href="https://linkedin.com/in/thunga-santhosh-reddy" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon"><Linkedin size={24} aria-hidden="true" /></div>
                <span>LinkedIn</span>
              </a>

              <a href="https://github.com/santhosh18v" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon"><Github size={24} aria-hidden="true" /></div>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form action="https://formsubmit.co/santhoshthunga297@gmail.com" method="POST" className="contact-form">
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" aria-label="Your name" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" aria-label="Your email" required className="form-input" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" aria-label="Your message" required rows="6" className="form-input"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
