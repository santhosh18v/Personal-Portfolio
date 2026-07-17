import React from 'react';
import {
  BrainCircuit,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Stethoscope,
} from 'lucide-react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'DentOS AI - Multi-Tenant Dental Clinic Management SaaS',
      period: 'June 2026 - Present',
      description: 'DentOS AI is a full-stack multi-tenant SaaS platform for dental clinics.',
      icon: <Stethoscope size={42} aria-hidden="true" />,
      features: [
        'Built with Next.js, TypeScript, React, PostgreSQL, Prisma ORM, Tailwind CSS, and Shadcn UI.',
        'Secured with JWT-based authentication, Role-Based Access Control, authorization middleware, and clinic-level tenant isolation.',
        'Supports patient management, appointment scheduling, clinical notes, billing, invoice generation, and analytics modules.',
        'Implements RESTful APIs, server-side validation, and secure database access.',
        'Deployed with Render and Neon PostgreSQL using production environment variables, database migrations, CI/CD workflow configuration, Docker, Git, and GitHub.',
        'Adds AI-powered clinical dictation with Faster-Whisper plus locally hosted Ollama and Qwen integration for automated clinical note generation.',
      ],
      tags: [
        'Next.js',
        'TypeScript',
        'React',
        'PostgreSQL',
        'Prisma ORM',
        'Tailwind CSS',
        'JWT',
        'Shadcn UI',
        'REST APIs',
        'Neon PostgreSQL',
        'Render',
        'Docker',
        'Git',
        'GitHub',
        'Faster-Whisper',
        'Ollama',
        'Qwen',
      ],
      live: 'https://dentos-ai.onrender.com',
    },
    {
      title: 'LipSpeak - AI-Powered Lip Reading System',
      period: 'January 2026 - Present',
      description: 'LipSpeak is an AI-based lip-reading system that predicts spoken words from silent video sequences using machine learning, deep learning, and computer vision.',
      icon: <BrainCircuit size={42} aria-hidden="true" />,
      features: [
        'Developed a video preprocessing pipeline to extract and prepare video frames for model training.',
        'Trained and evaluated models on lip-movement datasets and performed speaker-independent testing.',
        'Evaluated model generalization on unseen speakers while experimenting with dataset quality and training strategies.',
        'Implemented preprocessing, training, evaluation, and inference workflows.',
        'Conducted model architecture and dataset optimization experiments focused on improving prediction accuracy and generalization.',
      ],
      tags: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'OpenCV',
        'NumPy',
        'Pandas',
        'Deep Learning',
        'Computer Vision',
        'Machine Learning',
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section section">
      <h2 className="section-title">Featured Projects</h2>
      <h3 className="section-subtitle">AI-powered products and systems</h3>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card glass">
            <div className="project-visual" aria-hidden="true">
              {project.icon}
              <span>{project.title.split(' - ')[0]}</span>
            </div>

            <div className="project-content">
              <div className="project-heading">
                <h4 className="project-title">{project.title}</h4>
                <span className="project-period">
                  <Calendar size={15} aria-hidden="true" />
                  {project.period}
                </span>
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="project-tags" aria-label={`${project.title} technology stack`}>
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              {project.live && (
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-link-btn"
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
