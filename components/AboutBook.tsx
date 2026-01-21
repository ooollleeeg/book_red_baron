import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { Section } from './Section';
import './AboutBook.css';

export const AboutBook: React.FC = () => {
  return (
    <Section id="about-book" title="About The Book">
      <div className="book-grid">
        <div className="book-info">
          <p className="book-description">
            Step into the cockpit with the most feared pilot of World War I. This comprehensive volume isn't just a biography; it's a tactical manual, a historical record, and a visual masterpiece.
          </p>
          <p className="book-description">
            Featuring never-before-seen diary entries, flight logs, and tactical diagrams drawn by Richthofen himself, this book offers an unprecedented look into the mind of the Red Baron.
          </p>
          <ul className="book-features">
            <li className="book-feature-item">
              <BookOpen className="feature-icon" /> 
              <span>350+ Pages of Historical Analysis</span>
            </li>
            <li className="book-feature-item">
              <Award className="feature-icon" /> 
              <span>Includes 80 Combat Reports</span>
            </li>
          </ul>
        </div>
        <div className="book-cover-container">
          <div className="book-cover">
            <div className="book-cover-content">
              <span className="book-title-main">RED</span>
              <span className="book-title-sub">BARON</span>
              <span className="book-subtitle">The Definitive Edition</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};