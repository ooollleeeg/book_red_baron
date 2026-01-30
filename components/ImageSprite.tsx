import React from 'react';
import { IMAGE_URLS } from '../assets/images/urls.ts';

export const ImageSprite: React.FC = () => {
  return (
    <svg style={{ display: 'none' }} xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <symbol id='img-hero' viewBox='0 0 100 100' preserveAspectRatio='none'>
          <image
            href={IMAGE_URLS.HERO_BG}
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
          />
        </symbol>

        <symbol
          id='img-red-baron'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <image
            href={IMAGE_URLS.RED_BARON_PORTRAIT}
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
          />
        </symbol>

        <symbol
          id='img-albatros'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <image
            href={IMAGE_URLS.ALBATROS_DII}
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
          />
        </symbol>

        <symbol
          id='img-fokker'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <image
            href={IMAGE_URLS.FOKKER_DRI}
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
          />
        </symbol>
      </defs>
    </svg>
  );
};
