import React, { useEffect, useState } from 'react';
import {
  BrainCircuit,
  Bot,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Github,
  Info,
  Sprout,
  Stethoscope,
  X,
} from 'lucide-react';
import './ProjectsSection.css';

const projects = [
  {
    key: 'forgeai',
    shortTitle: 'ForgeAI',
    title: 'ForgeAI – Local AI Multi-Agent Backend Engineering Platform',
    period: 'April 2026 - Present',
    description:
      'CLI-first local AI orchestration platform that coordinates specialized agents to design, implement, test, validate, and document backend software.',
    icon: <Bot size={42} aria-hidden="true" />,
    features: [
      'Developed specialized Project Manager, Backend, Testing, and Documentation agents.',
      'Integrated locally hosted Qwen models through Ollama for privacy-focused AI execution.',
      'Implemented structured task planning, workflow coordination, validation, and approval stages.',
      'Added persistent workflow state using LangGraph and SQLite.',
    ],
    detailFeatures: [
      'Built automated testing, configuration validation, error handling, and execution reporting.',
      'Designed the platform so generated changes are validated in a sandbox before being applied locally.',
    ],
    tags: [
      'Python',
      'LangGraph',
      'Ollama',
      'Qwen',
      'SQLite',
      'Pytest',
      'CLI',
      'Multi-Agent Systems',
      'Generative AI',
    ],
    github: 'https://github.com/santhosh18v/ForgeAI',
  },
  {
    key: 'dentos-ai',
    shortTitle: 'DentOS AI',
    title: 'DentOS AI – Multi-Tenant Dental Clinic Management SaaS',
    period: 'June 2026 - Present',
    description:
      'Full-stack multi-tenant SaaS platform for managing dental clinics, patients, appointments, billing, clinical notes, and analytics.',
    icon: <Stethoscope size={42} aria-hidden="true" />,
    features: [
      'Built using Next.js, TypeScript, React, PostgreSQL, Prisma ORM, Tailwind CSS, and Shadcn UI.',
      'Secured with JWT authentication, Role-Based Access Control, and clinic-level tenant isolation.',
      'Developed patient management, appointment scheduling, billing, invoice, clinical-note, and analytics modules.',
      'Implemented REST APIs, server-side validation, protected routes, and secure database access.',
    ],
    detailFeatures: [
      'Deployed using Render and Neon PostgreSQL with environment variables and database migrations.',
      'Integrated Faster-Whisper, FastAPI, Ollama, and Qwen for AI-assisted clinical-note generation.',
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'PostgreSQL',
      'Prisma ORM',
      'JWT',
      'REST APIs',
      'Docker',
      'FastAPI',
      'Ollama',
    ],
    live: 'https://dentos-ai.onrender.com',
  },
  {
    key: 'agriai',
    shortTitle: 'AgriAI',
    title: 'AgriAI – AI-Powered Smart Agriculture Platform',
    period: 'July 2026 - Present',
    description:
      'Intelligent agriculture platform that helps farmers identify crop diseases, receive farming recommendations, and manage agricultural information.',
    icon: <Sprout size={42} aria-hidden="true" />,
    features: [
      'Developed crop-disease detection, pest identification, soil advisory, AI chat, history, and dashboard modules.',
      'Built the frontend using Next.js, TypeScript, React, Tailwind CSS, and Recharts.',
      'Implemented authentication and protected user functionality using NextAuth.',
      'Integrated AI and vision services for analysing crop images and generating agricultural recommendations.',
    ],
    detailFeatures: [
      'Used MongoDB for storing user profiles, analysis history, settings, and farming-related information.',
      'Currently developing a Spring Boot backend for authentication, business logic, APIs, and database operations.',
    ],
    tags: [
      'Java',
      'Spring Boot',
      'Next.js',
      'TypeScript',
      'MongoDB',
      'REST APIs',
      'Docker',
      'Computer Vision',
      'Generative AI',
    ],
  },
  {
    key: 'lipspeak',
    shortTitle: 'LipSpeak',
    title: 'LipSpeak – AI-Powered Visual Speech Recognition System',
    period: 'January 2026 - Present',
    description:
      'AI-based lip-reading system that predicts spoken words from silent video sequences using deep learning and computer vision.',
    icon: <BrainCircuit size={42} aria-hidden="true" />,
    features: [
      'Developed a video-preprocessing pipeline to extract, process, and prepare mouth-region frames.',
      'Trained and evaluated deep-learning models using lip-movement datasets.',
      'Implemented ResNet, BiLSTM, and attention-based architectures for visual speech recognition.',
      'Conducted speaker-dependent and speaker-independent model evaluation.',
    ],
    detailFeatures: [
      'Analysed model performance on unseen speakers and different recording conditions.',
      'Built preprocessing, training, evaluation, and inference workflows using Python and PyTorch.',
    ],
    tags: [
      'Python',
      'PyTorch',
      'OpenCV',
      'NumPy',
      'Pandas',
      'Deep Learning',
      'Computer Vision',
      'BiLSTM',
      'Attention',
    ],
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section id="projects" className="projects-section section">
      <h2 className="section-title">Featured Projects</h2>
      <h3 className="section-subtitle">AI-powered products and systems</h3>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.key} className="project-card glass">
            <div className="project-visual" aria-hidden="true">
              {project.icon}
              <span>{project.shortTitle}</span>
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

              <div className="project-tags" aria-label={`${project.shortTitle} technology stack`}>
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline project-link-btn"
                  >
                    <Github size={18} aria-hidden="true" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-link-btn"
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
                <button
                  type="button"
                  className="btn btn-outline project-link-btn project-details-btn"
                  onClick={() => setActiveProject(project)}
                >
                  <Info size={18} aria-hidden="true" />
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal glass"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              <X size={22} aria-hidden="true" />
            </button>

            <div className="project-modal-header">
              {activeProject.icon}
              <div>
                <h4 id="project-modal-title" className="project-modal-title">
                  {activeProject.title}
                </h4>
                <span className="project-period">
                  <Calendar size={15} aria-hidden="true" />
                  {activeProject.period}
                </span>
              </div>
            </div>

            <p className="project-desc">{activeProject.description}</p>

            <ul className="project-features">
              {[...activeProject.features, ...activeProject.detailFeatures].map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="project-tags" aria-label={`${activeProject.shortTitle} technology stack`}>
              {activeProject.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>

            <div className="project-links">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline project-link-btn"
                >
                  <Github size={18} aria-hidden="true" />
                  GitHub
                </a>
              )}
              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary project-link-btn"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
