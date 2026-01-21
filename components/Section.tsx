import React from 'react';
import './Section.css';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`section ${dark ? 'section-dark' : ''}`}
    >
      <div className="section-container">
        <h2 className="section-title">
          {title}
        </h2>
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};