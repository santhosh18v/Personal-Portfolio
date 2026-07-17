import React from 'react';
import { Award, BadgeCheck, CheckCircle, Trophy } from 'lucide-react';
import './CertificationsSection.css';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Google Cloud Skill Badge - Analyze Sentiment with Natural Language API',
      type: 'Skill Badge',
      icon: <BadgeCheck size={32} className="cert-icon" aria-hidden="true" />,
    },
    {
      title: 'AI/ML Internship Completion Certificate - Saredufy Web Plus Academy',
      type: 'Certificate',
      icon: <Award size={32} className="cert-icon" aria-hidden="true" />,
    },
    {
      title: 'Data Science for Beginners Certification',
      type: 'Certification',
      icon: <CheckCircle size={32} className="cert-icon" aria-hidden="true" />,
    },
    {
      title: 'Participated in College-Level Hackathon 2025',
      type: 'Achievement',
      icon: <Trophy size={32} className="cert-icon" aria-hidden="true" />,
    },
  ];

  return (
    <section id="certifications" className="certifications-section section">
      <h2 className="section-title">Credentials</h2>
      <h3 className="section-subtitle">Certifications & Achievements</h3>

      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card glass">
            <div className="cert-header">
              {cert.icon}
              <h4 className="cert-title">{cert.title}</h4>
            </div>
            <span className="cert-issuer">{cert.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
