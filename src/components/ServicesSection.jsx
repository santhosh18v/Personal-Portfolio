import React from 'react';
import {
  Cpu,
  Database,
  Layers,
  LayoutTemplate,
  Lightbulb,
  ServerCog,
} from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    title: 'Full Stack Development',
    description:
      'Build responsive web applications using React / Next.js, backend APIs, databases, and authentication systems.',
    icon: <Layers size={28} aria-hidden="true" />,
  },
  {
    title: 'AI Application Development',
    description:
      'Build AI-powered applications using machine learning, NLP, computer vision, GenAI tools, and local/model integrations.',
    icon: <Cpu size={28} aria-hidden="true" />,
  },
  {
    title: 'Backend Development',
    description:
      'Develop APIs, authentication systems, role-based access control, and scalable backend workflows.',
    icon: <ServerCog size={28} aria-hidden="true" />,
  },
  {
    title: 'UI / Responsive Design',
    description:
      'Build modern, responsive interfaces with clean layouts and usable design.',
    icon: <LayoutTemplate size={28} aria-hidden="true" />,
  },
  {
    title: 'Database Design & Integration',
    description:
      'Work with PostgreSQL, MongoDB, Prisma, and structured backend data flows.',
    icon: <Database size={28} aria-hidden="true" />,
  },
  {
    title: 'Project-Based Problem Solving',
    description:
      'Turn ideas into academic and personal projects focused on real-world use cases.',
    icon: <Lightbulb size={28} aria-hidden="true" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section section">
      <h2 className="section-title">What I Do</h2>
      <h3 className="section-subtitle">Services & Strengths</h3>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card glass">
            <div className="service-icon">{service.icon}</div>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-desc">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
