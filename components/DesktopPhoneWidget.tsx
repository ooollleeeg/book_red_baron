import React from 'react';
import { PHONE_NUMBER } from '../constants';
import './DesktopPhoneWidget.css';

const DesktopPhoneWidget: React.FC = () => {
  return (
    <div className="phone-widget-container group"> 
      <div className="phone-animated-bar" />
      <a 
        href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
        className="phone-link"
      >
        {PHONE_NUMBER}
      </a>
    </div>
  );
};

export default DesktopPhoneWidget;
