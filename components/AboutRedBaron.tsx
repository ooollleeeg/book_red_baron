import React from 'react';
import { Section } from './Section';
import { RasterImage } from './RasterImage';
import './AboutRedBaron.css';

export const AboutRedBaron: React.FC = () => {
  return (
    <Section id="about-red-baron" title="Manfred von Richthofen" dark>
      <div className="baron-container">
        <div className="baron-image-col">
           <div className="baron-image-frame">
             <RasterImage 
               id="img-red-baron"
               className="baron-img"
               alt="Manfred von Richthofen"
             />
           </div>
        </div>
        <div className="baron-text-col">
          <p className="baron-text">
            Manfred Albrecht Freiherr von Richthofen, known as the "Red Baron", was a fighter pilot with the German Air Force during World War I. He is considered the ace-of-aces of the war, being officially credited with 80 air combat victories.
          </p>
          <p className="baron-text">
            Originally a cavalryman, Richthofen transferred to the Air Service in 1915, becoming one of the first members of fighter squadron Jagdstaffel 2 in 1916. He quickly distinguished himself as a fighter pilot, and during 1917 became leader of Jasta 11 and then the larger fighter wing designation Jagdgeschwader 1, better known as "The Flying Circus".
          </p>
          <blockquote className="baron-quote">
            "Everything in the air that is red belongs to me."
          </blockquote>
        </div>
      </div>
    </Section>
  );
};