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
            <a href="#">
                <Logo />
            </a>
            
            <div className="flex flex-col justify-center leading-none">
                <span className="font-tektur font-normal text-[16px] text-white">Fermory</span>
                <span className="font-tektur font-normal text-[16px] text-white">Book</span>
            </div>
        </div>

        <div className="hidden xl:flex w-full h-full items-center justify-end pr-10">
          
            <div className="absolute left-[271px] top-1/2 -translate-y-1/2">
               <DesktopPhoneWidget />
            </div>

            <nav className="header-nav">
                {NAV_ITEMS_DESKTOP.map((item) => (
                <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="nav-link"
                >
                    {item.label}
                </a>
                ))}
            </nav>
        </div>

        <div className="xl:hidden absolute right-[25px] top-1/2 -translate-y-1/2">
          <BurgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
