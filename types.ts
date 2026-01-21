import { ReactNode } from 'react';

export enum SectionId {
  ABOUT_BOOK = 'about-book',
  ABOUT_PLANES = 'about-planes',
  ABOUT_RED_BARON = 'about-red-baron',
  BUY_NOW = 'buy-now',
}

export interface NavItem {
  id: SectionId;
  label: string;
  icon?: ReactNode;
}