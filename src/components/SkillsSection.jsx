import React from 'react';
import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Network,
  ServerCog,
  Workflow,
} from 'lucide-react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={24} aria-hidden="true" />,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      title: 'Databases',
      icon: <Database size={24} aria-hidden="true" />,
      skills: ['PostgreSQL', 'MongoDB', 'Neon PostgreSQL'],
    },
    {
      title: 'Frontend & Web',
      icon: <Workflow size={24} aria-hidden="true" />,
      skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS', 'Shadcn UI'],
    },
    {
      title: 'Backend & APIs',
      icon: <ServerCog size={24} aria-hidden="true" />,
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'JWT Authentication',
        'Role-Based Access Control',
        'Prisma ORM',
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: <BrainCircuit size={24} aria-hidden="true" />,
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'NLP Fundamentals',
        'Generative AI',
        'OpenAI API',
        'Faster-Whisper',
        'Ollama',
        'Qwen',
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <GitBranch size={24} aria-hidden="true" />,
      skills: ['Git', 'GitHub', 'Docker', 'Render', 'VS Code'],
    },
    {
      title: 'Core Computer Science',
      icon: <Network size={24} aria-hidden="true" />,
      skills: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section section">
      <h2 className="section-title">Technical Skills</h2>
      <h3 className="section-subtitle">Technologies and engineering foundations</h3>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article key={category.title} className="skill-category-card glass">
            <div className="skill-category-heading">
              <div className="skill-category-icon">{category.icon}</div>
              <h4>{category.title}</h4>
            </div>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
