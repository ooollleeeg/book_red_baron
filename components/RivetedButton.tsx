import React, { useId } from 'react';
import './RivetedButton.css';

const ButtonLineSVG: React.FC<{ className?: string, idSuffix: string }> = ({ className, idSuffix }) => (
  <svg className={className} width="2" height="33" viewBox="0 0 2 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.749973 0L0.75 32.3171" stroke={`url(#btn_grad_${idSuffix})`} strokeWidth="1.5" />
    <defs>
      <linearGradient id={`btn_grad_${idSuffix}`} x1="-0.469475" y1="-7.25846e-05" x2="-0.469478" y2="53.6584" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C1262C" />
        <stop offset="1" stopColor="#C1262C" />
      </linearGradient>
    </defs>
  </svg>
);

const ButtonPlusSVG: React.FC<{ className?: string, idSuffix: string }> = ({ className, idSuffix }) => (
  <svg className={className} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 0V23M0 11.5H23" stroke={`url(#btn_plus_grad_${idSuffix})`} strokeWidth="1.5" />
    <defs>
      <linearGradient id={`btn_plus_grad_${idSuffix}`} x1="0" y1="0" x2="23" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C1262C" />
        <stop offset="1" stopColor="#C1262C" />
      </linearGradient>
    </defs>
  </svg>
);

const ButtonMinusSVG: React.FC<{ className?: string, idSuffix: string }> = ({ className, idSuffix }) => (
  <svg className={className} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 11.5H23" stroke={`url(#btn_minus_grad_${idSuffix})`} strokeWidth="1.5" />
    <defs>
      <linearGradient id={`btn_minus_grad_${idSuffix}`} x1="0" y1="0" x2="23" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C1262C" />
        <stop offset="1" stopColor="#C1262C" />
      </linearGradient>
    </defs>
  </svg>
);

export interface RivetedButtonProps {
  text: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
  noRivets?: boolean;
  noMinuses?: boolean;
  noDecorations?: boolean;
}

const RivetedButton: React.FC<RivetedButtonProps> = ({ 
  text, 
  href, 
  className, 
  style, 
  target, 
  rel, 
  noRivets, 
  noMinuses, 
  noDecorations 
}) => {
  const uniqueId = useId().replace(/:/g, '');

  return (
    <a 
      href={href}
      target={target}
      rel={rel}
      className={`riveted-button ${className || ''}`}
      style={style}
    >
      {!noDecorations && (
        <ButtonLineSVG 
          idSuffix={`${uniqueId}_tl`}
          className="btn-decoration btn-line-tl" 
        />
      )}

      {!noDecorations && (
        <ButtonLineSVG 
          idSuffix={`${uniqueId}_br`}
          className="btn-decoration btn-line-br" 
        />
      )}

      {!noDecorations && (
        <ButtonPlusSVG
          idSuffix={`${uniqueId}_bl`}
          className="btn-decoration btn-plus-bl"
        />
      )}

      {!noDecorations && !noMinuses && (
        <ButtonMinusSVG
          idSuffix={`${uniqueId}_bl_min`}
          className="btn-decoration btn-minus-bl-min"
        />
      )}

      {!noDecorations && (
        <ButtonPlusSVG
          idSuffix={`${uniqueId}_tr`}
          className="btn-decoration btn-plus-tr"
        />
      )}

      {!noDecorations && !noMinuses && (
        <ButtonMinusSVG
          idSuffix={`${uniqueId}_tr_min`}
          className="btn-decoration btn-minus-tr-min"
        />
      )}

      {!noRivets && (
        <>
          <div className="btn-rivet btn-rivet-tl" />
          <div className="btn-rivet btn-rivet-tr" />
          <div className="btn-rivet btn-rivet-bl" />
          <div className="btn-rivet btn-rivet-br" />
        </>
      )}
      
      {text}
    </a>
  );
};

export default RivetedButton;
