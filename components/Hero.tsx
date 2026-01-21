import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RasterImage } from './RasterImage';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Background Image with Overlay via Sprite */}
      <div className="hero-bg-wrapper">
        <RasterImage 
          id="img-hero" 
          className="hero-bg-img" 
          alt="WWI Airplane Background"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        
        {/* Text Block 1 */}
        <h1 className="hero-title text-shadow-xl">
          Red Baron: The Legend That Conquered the Skies
        </h1>

        {/* Text Block 2 */}
        <p className="hero-subtitle text-shadow-lg">
          The story of the greatest ace of the First World War and his legendary planes.
        </p>

        {/* Text Block 3 */}
        <h2 className="hero-description text-shadow-xl">
          Analysis of the techniques and tactics of air combat from the best pilot of the First World War.
        </h2>

        {/* CTA Button */}
        <a href="#buy-now" className="btn-buy-hero">
           <span className="btn-buy-overlay"></span>
           <span className="btn-buy-text">BUY THE BOOK</span>
           <ArrowRight className="btn-buy-icon" />
        </a>
        
      </div>
      
      {/* Decorative bottom fade */}
      <div className="hero-fade-bottom"></div>
    </section>
  );
};