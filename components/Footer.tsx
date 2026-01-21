import React from 'react';
import { Logo } from './Icons';
import { NAV_ITEMS_DESKTOP } from '../constants';
import DesktopPhoneWidget from './DesktopPhoneWidget';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="hidden xl:flex items-center gap-[4px] absolute left-[150px] top-1/2 -translate-y-1/2">
          <Logo className="w-[29px] h-[45px]" />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-tektur font-normal text-[16px] text-white">Fermory</span>
            <span className="font-tektur font-normal text-[16px] text-white">Book</span>
          </div>
        </div>

        <div className="footer-mobile-grid">
          
          <div className="col-span-1 flex items-center gap-[4px]">
            <Logo className="w-[29px] h-[45px]" />
            <div className="flex flex-col justify-center leading-none">
              <span className="font-tektur font-normal text-[16px] text-white">Fermory</span>
              <span className="font-tektur font-normal text-[16px] text-white">Book</span>
            </div>
          </div>

          <div className="col-span-1 flex justify-start pl-2">
            <DesktopPhoneWidget />
          </div>

          {NAV_ITEMS_DESKTOP.map((item) => (
             <a 
               key={item.id}
               href={`#${item.id}`}
               className="font-vollkorn font-normal text-[14px] text-white hover:text-brand-gold transition-colors"
             >
                {item.label}
             </a>
           ))}
        </div>

        <div className="footer-nav-desktop">
            <div className="absolute left-[271px] top-1/2 -translate-y-1/2">
               <DesktopPhoneWidget />
            </div>

            <nav className="flex gap-8 ml-auto">
                {NAV_ITEMS_DESKTOP.map((item) => (
                <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="font-vollkorn font-normal text-[13px] text-white hover:text-brand-gold transition-colors"
                >
                    {item.label}
                </a>
                ))}
            </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
