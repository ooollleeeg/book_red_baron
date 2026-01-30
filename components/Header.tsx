import React, { useState } from 'react';
import { Logo, BurgerIcon } from './Icons';
import { NAV_ITEMS_DESKTOP } from '../constants';
import DesktopPhoneWidget from './DesktopPhoneWidget';
import MobileMenu from './MobileMenu';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo-group">
            <a href="#"><Logo /></a>
            <div className="logo-text-group">
                <span className="logo-text-main">Fermory</span>
                <span className="logo-text-sub">Book</span>
            </div>
        </div>

        <nav className="header-nav-desktop hidden xl:flex">
            <div className="header-phone-pos">
               <DesktopPhoneWidget />
            </div>
            <div className="header-nav-links">
                {NAV_ITEMS_DESKTOP.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="nav-link">
                    {item.label}
                </a>
                ))}
            </div>
        </nav>

        <div className="xl:hidden burger-pos">
          <BurgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
