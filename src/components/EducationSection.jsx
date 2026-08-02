import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './EducationSection.css';

const EducationSection = () => {
  const educationData = [
    {
      institution: 'Madanapalle Institute of Technology & Science',
      location: 'Madanapalle, Andhra Pradesh',
      degree: 'B.Tech in Computer Science and Engineering',
      period: '2023 - 2027',
      details: 'CGPA: 7.92',
    },
    {
      institution: 'Sri Siddartha Junior College',
      location: 'Madanapalle, Andhra Pradesh',
      degree: 'Intermediate - PCM',
      period: '2021 - 2022',
      details: 'Percentage: 96.4%',
    },
    {
      institution: 'Vishwa Vijetha High School',
      location: 'Gandlapenta, Andhra Pradesh',
      degree: 'Matriculation',
      period: '2020 - 2021',
      details: 'Percentage: 99.5%',
    },
  ];

  return (
    <section id="education" className="education-section section">
      <h2 className="section-title">Academic Journey</h2>
      <h3 className="section-subtitle">Education</h3>

      <div className="education-container">
        {educationData.map((item, index) => (
          <div key={index} className="education-card glass">
            <div className="education-icon-wrapper">
              <GraduationCap size={24} />
            </div>
            <div className="education-content">
              <div className="education-header">
                <h4 className="institution">{item.institution}</h4>
                <span className="period">
                  <Calendar size={14} /> {item.period}
                </span>
              </div>
              <p className="degree">{item.degree}</p>
              <div className="education-footer">
                <span className="location">
                  <MapPin size={14} /> {item.location}
                </span>
                {item.details && <span className="details">{item.details}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
