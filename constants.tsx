import React from 'react';
import { NavItem, SectionId } from './types';
import { IconCart, IconInfo, IconPlane, IconBook } from './components/Icons';

export const PHONE_NUMBER = "+1 234 567 8900";

// Centralized Image Assets
export const IMAGES = {
  // Using a high-quality Red Baron / WWI Plane themed image
  HERO_BG: "https://images.unsplash.com/photo-1598329622678-755c325c93c1?q=80&w=2669&auto=format&fit=crop",
  // Placeholders for other sections (can be updated later)
  ABOUT_BOOK_BG: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
  RED_BARON_PORTRAIT: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1000&auto=format&fit=crop",
  RED_BARON_PHOTO_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Manfred_von_Richthofen_with_other_pilots.jpg/800px-Manfred_von_Richthofen_with_other_pilots.jpg",
  PLANE_Blueprint: "https://images.unsplash.com/photo-1588619461347-194165d496e1?q=80&w=1000&auto=format&fit=crop",
  
  // New Assets for Planes Section
  PLANES_BG: "https://images.unsplash.com/photo-1519810755548-392116150d1d?q=80&w=2000&auto=format&fit=crop", // Cloudy sky/vintage texture
  ALBATROS_DII: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Albatros_D.II_Gen.jpg/1200px-Albatros_D.II_Gen.jpg", // Wiki placeholder or similar vintage plane
  ALBATROS_DIII: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Albatros_D.III_in_flight.jpg",
  FOKKER_DRI: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Fokker_Dr_I_1918.jpg"
};

// Desktop Order
export const NAV_ITEMS_DESKTOP: NavItem[] = [
  { id: SectionId.ABOUT_BOOK, label: "About book" },
  { id: SectionId.ABOUT_PLANES, label: "About the Planes" },
  { id: SectionId.ABOUT_RED_BARON, label: "About the Red Baron" },
  { id: SectionId.BUY_NOW, label: "Buy Now" },
];

// Mobile/Tablet Menu Order and Configuration
export const NAV_ITEMS_MOBILE: NavItem[] = [
  { id: SectionId.BUY_NOW, label: "Buy Now", icon: <IconCart /> },
  { id: SectionId.ABOUT_RED_BARON, label: "About the Red Baron", icon: <IconPlane /> },
  { id: SectionId.ABOUT_PLANES, label: "About the Planes", icon: <IconInfo /> },
  { id: SectionId.ABOUT_BOOK, label: "About book", icon: <IconBook /> },
];