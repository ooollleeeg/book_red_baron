import React from 'react';
import { Section } from './Section';
import { RasterImage } from './RasterImage';
import './AboutPlanes.css';

export const AboutPlanes: React.FC = () => {
  return (
    <Section id="about-planes" title="The Legendary Planes">
      <div className="planes-grid">
        {/* Plane 1 */}
        <div className="plane-card group">
          <div className="plane-image-wrapper">
             <div className="plane-image-inner">
               <RasterImage 
                 id="img-albatros" 
                 className="plane-img"
                 alt="Albatros D.III"
               />
             </div>
             <div className="plane-name-badge badge-dark">Albatros D.III</div>
          </div>
          <p className="plane-desc">
            The machine in which Richthofen scored many of his early victories. A robust biplane with superior climbing ability.
          </p>
        </div>
        
        {/* Plane 2 */}
        <div className="plane-card group">
          <div className="plane-image-wrapper">
             <div className="plane-image-inner">
               <RasterImage 
                  id="img-fokker" 
                  className="plane-img plane-img-filter"
                  alt="Fokker Dr.I"
               />
             </div>
             <div className="plane-name-badge badge-red">Fokker Dr.I Triplane</div>
          </div>
          <p className="plane-desc">
            The iconic three-winged aircraft most associated with the Red Baron. While slower than contemporary allied fighters, its maneuverability was unmatched in a dogfight.
          </p>
        </div>
      </div>
    </Section>
  );
};