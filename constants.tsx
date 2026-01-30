import React from 'react';
import { NavItem, SectionId } from './types';
import { IconCart, IconInfo, IconPlane, IconBook } from './components/Icons';
import { IMAGE_URLS } from './assets/images/urls';

export const PHONE_NUMBER = '+1 234 567 8900';

// Re-exporting for backward compatibility with components using IMAGES
export const IMAGES = IMAGE_URLS;

// Desktop Order
export const NAV_ITEMS_DESKTOP: NavItem[] = [
  { id: SectionId.ABOUT_BOOK, label: 'About book' },
  { id: SectionId.ABOUT_PLANES, label: 'About the Planes' },
  { id: SectionId.ABOUT_RED_BARON, label: 'About the Red Baron' },
  { id: SectionId.BUY_NOW, label: 'Buy Now' },
];

// Mobile/Tablet Menu Order and Configuration
export const NAV_ITEMS_MOBILE: NavItem[] = [
  { id: SectionId.BUY_NOW, label: 'Buy Now', icon: <IconCart /> },
  {
    id: SectionId.ABOUT_RED_BARON,
    label: 'About the Red Baron',
    icon: <IconPlane />,
  },
  { id: SectionId.ABOUT_PLANES, label: 'About the Planes', icon: <IconInfo /> },
  { id: SectionId.ABOUT_BOOK, label: 'About book', icon: <IconBook /> },
];
