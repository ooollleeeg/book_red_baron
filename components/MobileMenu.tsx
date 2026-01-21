import React from 'react';
import { NAV_ITEMS_MOBILE } from '../constants';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu-container">
        {NAV_ITEMS_MOBILE.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onClose}
            className="mobile-menu-item group"
          >
            <div className="rivet rivet-tl" />
            <div className="rivet rivet-tr" />
            <div className="rivet rivet-bl" />
            <div className="rivet rivet-br" />

            <span className="font-inter text-[20px] text-white font-normal">
              {item.label}
            </span>

            <span className="text-icon-dark">
              {item.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
