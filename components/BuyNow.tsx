import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Section } from './Section';
import './BuyNow.css';

export const BuyNow: React.FC = () => {
  return (
    <Section id="buy-now" title="Acquire The Legend" dark>
       <div className="buy-card">
         <div className="buy-info">
            <h3 className="buy-title">Limited First Edition</h3>
            <p className="buy-specs">Hardcover, 350 pages, High-gloss paper.</p>
            <div className="buy-price">$49.99</div>
            <p className="buy-note">Free shipping worldwide</p>
         </div>
         
         <div className="buy-actions">
           <button className="btn-buy-large">
             <ShoppingCart className="buy-icon" />
             Buy Now
           </button>
           <p className="secure-note">Secure payment via Stripe</p>
         </div>
       </div>
    </Section>
  );
};