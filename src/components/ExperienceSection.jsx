import React from 'react';
import { BrainCircuit, Calendar, CheckCircle2 } from 'lucide-react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const highlights = [
    'Completed online training focused on Artificial Intelligence, Machine Learning, NLP, and Generative AI.',
    'Developed an AI Product Description Generator using the OpenAI API.',
    'Generated product descriptions automatically from product information.',
    'Worked with prompt engineering and AI API integration.',
    'Applied Python and web technologies to build and test AI-powered applications.',
  ];

  const technologies = [
    'Python',
    'OpenAI API',
    'NLP',
    'Prompt Engineering',
    'HTML',
    'JavaScript',
  ];

  return (
    <section id="experience" className="experience-section section">
      <h2 className="section-title">Training & Experience</h2>
      <h3 className="section-subtitle">Applied AI learning and development</h3>

      <article className="experience-card glass">
        <div className="experience-heading">
          <div className="experience-icon" aria-hidden="true">
            <BrainCircuit size={30} />
          </div>
          <div>
            <h4>AI/ML Internship & Training</h4>
            <p>Saredufy Web Plus Academy</p>
          </div>
          <span className="experience-period">
            <Calendar size={16} aria-hidden="true" />
            June 2025 - July 2025
          </span>
        </div>

        <ul className="experience-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="experience-tech" aria-label="Technologies used">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ExperienceSection;
