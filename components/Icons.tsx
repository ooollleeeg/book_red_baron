import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="29" height="45" viewBox="0 0 29 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5787 27.1947C9.16295 27.1947 3.96262 21.9944 3.96262 15.5787C3.96262 9.16295 9.16295 3.96262 15.5787 3.96262V0C6.97487 0 0 6.97487 0 15.5787C0 24.1825 6.97487 31.1573 15.5787 31.1573V27.1947Z" fill="white" />
    <path d="M13.045 17.3154C19.4608 17.3154 24.6611 22.5157 24.6611 28.9314C24.6611 35.3472 19.4608 40.5475 13.045 40.5475V44.5101C21.6488 44.5101 28.6237 37.5352 28.6237 28.9314C28.6237 20.3277 21.6488 13.3528 13.045 13.3528V17.3154Z" fill="white" />
    <path d="M15.5388 25.1726C20.8374 25.1726 25.1328 20.8772 25.1328 15.5786C25.1328 10.28 20.8374 5.98462 15.5388 5.98462C10.2402 5.98462 5.94482 10.28 5.94482 15.5786C5.94482 20.8772 10.2402 25.1726 15.5388 25.1726Z" fill="white" />
    <path d="M7.77674 40.8193C10.2102 40.8193 12.183 38.8466 12.183 36.4131C12.183 33.9796 10.2102 32.0068 7.77674 32.0068C5.34323 32.0068 3.37048 33.9796 3.37048 36.4131C3.37048 38.8466 5.34323 40.8193 7.77674 40.8193Z" fill="white" />
  </svg>
);

export const BurgerIcon: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
  <svg onClick={onClick} className={`cursor-pointer ${className}`} width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="23" height="3" fill="#FAF7F2" />
    <rect y="6" width="23" height="3" fill="#FAF7F2" />
    <rect y="12" width="23" height="3" fill="#FAF7F2" />
  </svg>
);

// Shopping Cart Icon
export const IconCart: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 20C9 21.1046 8.10457 22 7 22C5.89543 22 5 21.1046 5 20C5 18.8954 5.89543 18 7 18C8.10457 18 9 18.8954 9 20Z" fill="#4a181b"/>
    <path d="M20 20C20 21.1046 19.1046 22 18 22C16.8954 22 16 21.1046 16 20C16 18.8954 16.8954 18 18 18C19.1046 18 20 18.8954 20 20Z" fill="#4a181b"/>
    <path d="M1 1H4L6.68 14.39C6.77144 14.8504 7.02191 15.264 7.38755 15.5583C7.75318 15.8526 8.2107 16.009 8.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#4a181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Info 'i' Icon (Serif style to match theme)
export const IconInfo: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7H12.01" stroke="#4a181b" strokeWidth="4" strokeLinecap="round"/>
    <path d="M12 11V17" stroke="#4a181b" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="10" stroke="#4a181b" strokeWidth="2"/>
  </svg>
);

// Airplane (Top View) Icon
export const IconPlane: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 9H21L14 13L15 20L12 18L9 20L10 13L3 9H9L12 2Z" fill="#4a181b"/>
  </svg>
);

// Open Book Icon
export const IconBook: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.5C12 5.5 10 3 6 3C4 3 2 4 2 4V19C2 19 4 18 6 18C10 18 12 20.5 12 20.5C12 20.5 14 18 18 18C20 18 22 19 22 19V4C22 4 20 3 18 3C14 3 12 5.5 12 5.5Z" stroke="#4a181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5.5V20.5" stroke="#4a181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);