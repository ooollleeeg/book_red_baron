import React from 'react';
import { SectionId } from '../types';
import { IMAGES } from '../constants';
import RivetedButton from '../components/RivetedButton';
import './Home.css';

// --- Payment Icons ---

const IconTheReadersCombined: React.FC = () => (
  <svg 
    width="55" 
    height="59" 
    viewBox="0 0 55 59" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)' }}
  >
    <g filter="url(#filter0_d_145_191)">
      <path opacity="0.54" d="M27.1311 33.9408L7.85522 28.0358V5.54565L27.1311 11.4469V33.9408Z" fill="white" />
      <path d="M27.1311 33.9407L12.4895 22.4902V0L27.1311 11.4468" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path opacity="0.54" d="M27.1311 33.9408L46.4032 28.0358V5.54565L27.1311 11.4469V33.9408Z" fill="white" />
      <path d="M27.1311 33.9407L41.7727 22.4902V0L27.1311 11.4468" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path d="M49.9354 40.6498L49.3458 40.8167C49.3087 40.7185 49.254 40.623 49.1817 40.5303C49.1112 40.4357 49.0148 40.3578 48.8924 40.2966C48.77 40.2354 48.6134 40.2048 48.4224 40.2048C48.1609 40.2048 47.9431 40.2651 47.7688 40.3856C47.5963 40.5043 47.5101 40.6554 47.5101 40.839Z" fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_145_191" x="0" y="0" width="54.0132" height="58.2693" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_145_191" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_145_191" result="shape" />
      </filter>
    </defs>
  </svg>
);

const IconPayment2New: React.FC = () => (
  <svg 
    width="47" 
    height="58" 
    viewBox="0 0 47 58" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)' }}
  >
    <path style={{ mixBlendMode: 'multiply' }} d="M23.0411 0.656147C22.1467 -0.218716 20.6928 -0.218716 19.7985 0.656147C18.9041 1.53101 18.9041 2.95318 19.7985 3.82804L23.0411 6.99994V16.6276L38.2919 31.5459V15.5744L23.0411 0.656147Z" fill="#737373" />
    <path d="M22.8208 1.86269C21.9265 0.987827 20.4726 0.987827 19.5782 1.86269C18.6838 2.73755 19.6503 3.68705 20.5446 4.56192L22.8208 6.6309V17.8383L37.3087 32.0102V16.0388L22.8208 1.86684V1.86269Z" fill="white" />
    <path style={{ mixBlendMode: 'multiply' }} d="M19.133 2.28978V2.28149V18.2529C19.133 18.2529 19.0907 19.0988 19.8028 19.7953C20.5149 20.4919 35.0536 34.7136 35.0536 34.7136V18.7422L19.8028 3.82391C19.3662 3.39684 19.15 2.84538 19.1373 2.28563L19.133 2.28978Z" fill="#A6A6A6" />
  </svg>
);

const IconPayment3: React.FC = () => (
  <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="35" height="20" rx="3" fill="white" fillOpacity="0.2"/>
    <path d="M2 12H37" stroke="white" strokeWidth="2"/>
    <rect x="25" y="19" width="8" height="4" fill="white" fillOpacity="0.6"/>
  </svg>
);

const IconPayment4: React.FC = () => (
  <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17L17 24L30 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPaymentSub5: React.FC = () => (
  <svg width="55" height="7" viewBox="0 0 55 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.0577 2.77756L53.3698 2.97225C53.3265 2.8576 53.2627 2.7462 53.1783 2.63803C53.0961 2.52771 52.9836 2.43685 52.8409 2.36547C52.6981 2.29408 52.5153 2.25839 52.2925 2.25839C51.9875 2.25839 51.7333 2.32869 51.53 2.4693C51.3288 2.60775 51.2282 2.78405 51.2282 2.99821C51.2282 3.18858 51.4359 3.44925C51.5743 3.55957 51.7906 3.65151 52.0848 3.72506L52.8247 3.90677C53.2703 4.01494 53.6023 4.18042 53.8208 4.40324C54.0393 4.62389 54.1486 4.90835 54.1486 5.25663C54.1486 5.54218 54.0663 5.79744 53.9019 6.02242C53.7397 6.2474 53.5126 6.42478 53.2205 6.55458C52.9285 6.68437 52.5889 6.74927 52.2016 6.74927C51.6933 6.74927 51.2725 6.63894 50.9394 6.41829C50.6062 6.19764 50.3953 5.87532 50.3066 5.45133L51.0335 5.26961C51.1027 5.53786 51.2336 5.73904 51.4261 5.87316C51.6208 6.00728 51.875 6.07434 52.1887 6.07434C52.5456 6.07434 52.829 5.99863 53.0388 5.8472C53.2508 5.69361 53.3568 5.50973 53.3568 5.29557C53.3568 5.12251 53.2962 4.97758 53.1751 4.86076C53.054 4.74178 52.8679 4.65309 52.617 4.59468L51.7863 4.39999C51.3299 4.29183 50.9946 4.12418 50.7804 3.89704C50.5684 3.66774 50.4624 3.38111 50.4624 3.03715C50.4624 2.75593 50.5414 2.50716 50.6993 2.29084C50.8593 2.07451 51.0768 1.9047 51.3515 1.78139C51.6284 1.65809 51.9421 1.59644 52.2925 1.59644C52.7857 1.59644 53.1729 1.7046 53.4542 1.92092C53.7375 2.13724 53.9387 2.42279 54.0577 2.77756Z" fill="white" />
  </svg>
);

// --- Buy Format Icons ---

const IconBookFormat1: React.FC = () => (
  <svg width="85" height="107" viewBox="0 0 85 107" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M84.3945 0V6.65756H77.9031V13.3218H84.3945V106.574H6.49804C6.49804 106.574 0.00667111 106.574 0.00667111 99.9133V10.0513C0.00667111 10.0313 0.00342566 10.0113 0.00342566 9.99133C-0.110173 5.47858 2.62269 2.28468 5.05047 1.17898C7.44578 -0.0266436 9.47109 0.0133218 9.74373 0H84.3945ZM9.73074 13.3218C9.73724 13.3218 9.74373 13.3218 9.74373 13.3218H71.4118V6.65756H9.74373C9.73724 6.67754 9.63986 6.6509 9.26012 6.72084C8.88687 6.78411 8.3708 6.92066 7.94886 7.13714C7.1277 7.70665 6.60515 7.83654 6.49804 9.99133C6.54673 11.6566 6.93296 12.0196 7.38087 12.4659C7.84825 12.8855 8.68239 13.1719 9.26012 13.2618C9.56846 13.3184 9.6918 13.3218 9.73074 13.3218ZM12.9894 99.9133H77.9031V19.9827H12.9894V99.9133Z" fill="#421013" />
    <path d="M19.4746 76.6003V69.9395H58.4228V76.6003H19.4746Z" fill="#421013" />
    <path d="M19.4746 49.9568V43.2959H71.4056V49.9568H19.4746Z" fill="#421013" />
    <path d="M19.4746 63.2786V56.6177H71.4056V63.2786H19.4746Z" fill="#421013" />
  </svg>
);

const IconBookFormat2: React.FC = () => (
  <svg width="105" height="108" viewBox="0 0 105 108" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M104.3 76.9262C104.3 63.8259 96.1317 52.7156 84.75 48.5718V13.3779H78.2313V6.6856H84.75V0H9.78477C9.51098 0.0133779 7.47714 -0.0267557 5.07174 1.18394C2.63374 2.29431 -0.110637 5.50166 0.00344009 10.0334C0.00344009 10.0535 0.00669945 10.0736 0.00669945 10.0936V100.334C0.00669945 107.023 6.52541 107.023 6.52541 107.023H75.2359L75.2131 107.01C91.3045 106.873 104.3 93.4646 104.3 76.9262ZM9.29913 13.3143C8.71896 13.2274 7.88131 12.9398 7.41196 12.5184C6.96217 12.0702 6.5743 11.7057 6.52541 10.0334C6.63297 7.87289 7.15773 7.73911 7.98235 7.17055C8.40606 6.95316 8.9243 6.81269 9.29913 6.75249C9.68047 6.67891 9.77825 6.70567 9.78477 6.6856H71.7125V13.3779H9.78477C9.77825 13.3779 9.68047 13.3846 9.29913 13.3143ZM13.0441 100.334V20.0668H78.2313V47.0233C77.1589 46.8995 76.0703 46.8226 74.9654 46.8226C71.53 46.8226 68.2478 47.4581 65.1873 48.5718V37.525L32.5937 29.1738V54.127C31.5703 53.7524 30.4849 53.5116 29.3344 53.5116C23.9304 53.5116 19.5563 58.0132 19.5563 63.545C19.5563 69.0868 23.9304 73.5784 29.3344 73.5784C34.7254 73.5784 39.1092 69.0901 39.1125 63.5517V37.7323L58.6686 42.7524V51.8962C50.807 57.2942 45.6312 66.4848 45.6312 76.9229C45.6312 86.3844 49.8912 94.8158 56.5435 100.331L13.0441 100.334ZM74.9654 100.334C62.368 100.307 52.1694 89.8493 52.1499 76.9262C52.1694 63.9998 62.368 53.5316 74.9654 53.5116C87.5628 53.5316 97.7548 63.9998 97.7809 76.9262C97.7548 89.8493 87.5628 100.307 74.9654 100.334Z" fill="#421013" />
    <path d="M71.7061 63.5449V90.3007L84.7435 76.9228L71.7061 63.5449Z" fill="#421013" />
  </svg>
);

const IconBookFormat3: React.FC = () => (
  <svg width="76" height="104" viewBox="0 0 76 104" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16303 0H71.837C74.5628 0.890193 76 2.72145 76 5.77354C75.9752 36.5997 76 67.4258 76 98.2519C76 101.864 73.9185 104 70.3997 104C48.8164 104 27.2083 104 5.62504 104C2.08151 103.975 0 101.838 0 98.2265C0 67.4003 0 36.5997 0 5.77354C0 5.23942 0.0247799 4.67987 0.1239 4.17119C0.594718 1.88212 2.13107 0.68672 4.16303 0ZM65.7907 83.144V13.0731H10.1845V83.144H65.7907ZM37.9876 98.7351C40.763 98.7351 43.0179 96.4461 43.0427 93.5975C43.0427 90.7743 40.7877 88.4089 38.0372 88.3835C35.2866 88.3326 32.9077 90.7488 32.9325 93.6229C32.9573 96.4969 35.2123 98.7351 37.9876 98.7351Z" fill="#421013" />
    <path d="M17.792 28.5373V20.8562H58.1833V28.5627C58.1833 28.5373 17.792 28.5373 17.792 28.5373Z" fill="#421013" />
    <path d="M58.1833 36.447V44.1536H17.792V36.447H58.1833Z" fill="#421013" />
    <path d="M58.1834 52.0378V59.6935H17.8169V52.0378H58.1834Z" fill="#421013" />
    <path d="M37.9134 75.3361H17.8169V67.6804H37.9134V75.3361Z" fill="#421013" />
  </svg>
);


// Mobile Arrow SVG
const ArrowIconMobile: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="53" height="24" viewBox="0 0 53 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9.547C0.895431 9.547 9.65645e-08 10.4424 0 11.547C-9.65645e-08 12.6516 0.89543 13.547 2 13.547L2 9.547ZM53 11.547L33 -5.87296e-06L33 23.094L53 11.547ZM2 13.547L35 13.547L35 9.547L2 9.547L2 13.547Z" fill="#C1262C" />
  </svg>
);

// Desktop Arrow SVG
const ArrowIconDesktop: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9.547C0.89543 9.547 0 10.4424 0 11.547C0 12.6516 0.89543 13.547 2 13.547V9.547ZM57 11.547L37 -8.58307e-06V23.094L57 11.547ZM2 13.547H39V9.547H2V13.547Z" fill="#C1262C" />
  </svg>
);


const Home: React.FC = () => {

  const BookHeader = () => (
    <div className="relative inline-block group mb-8 xl:mb-0">
      <h2 className="font-staatliches font-normal text-[#c1262c] text-[32px] md:text-[48px] xl:text-[64px] leading-[0.8] text-center">
        About book
      </h2>
      <div className="absolute border-t-[2px] border-[#c1262c] h-[0px] transition-transform duration-500 ease-out z-10 top-full mt-[2px] origin-[25%_50%] left-[-10px] md:left-[-13.75px] xl:left-[-17.5px] -rotate-90 group-hover:rotate-0 w-[28px] md:w-[43px] xl:w-[58px]" />
      <div className="absolute border-t-[2px] border-[#c1262c] h-[0px] transition-transform duration-500 ease-out left-1/2 -translate-x-1/2 top-full mt-[2px] rotate-0 group-hover:rotate-180 w-[168px] md:w-[278px] xl:w-[387px]" />
    </div>
  );

  const BookImage = () => (
    <div 
      className="bg-cover bg-center shadow-xl w-[494px] h-[353px] md:w-[400px] md:h-[286px] xl:w-[494px] xl:h-[353px] max-w-full"
      style={{ backgroundImage: `url('${IMAGES.ABOUT_BOOK_BG}')` }}
    />
  );

  const BookText1 = () => (
    <div className="w-[288px] md:w-[330px] xl:w-[461px] max-w-full relative">
      <div className="absolute top-[-7px] -left-[33px] w-[66px] h-[0px] border-t-[2px] border-[#c1262c]/30 pointer-events-none" />
      <div className="absolute top-[-24px] -left-[16px] w-[47px] h-[0px] border-t-[2px] border-[#c1262c]/30 origin-top-left rotate-90 pointer-events-none" />
      <div className="absolute top-[34px] -left-[16px] w-[111px] h-[0px] border-t-[2px] border-[#c1262c]/30 origin-top-left rotate-90 pointer-events-none" />
      <p className="font-inter font-normal text-[14px] xl:text-[16px] xl:font-normal text-justify text-[#181811] leading-relaxed">
        "Iron Birds" is a detailed and gripping account of the life and military career of Manfred von Richthofen, known to the world as the Red Baron. The book is not just a biography, but an in-depth study of World War I aviation, with special attention to the aircraft flown by the legendary ace.
      </p>
    </div>
  );

  const BookSub1 = () => (
    <h3 className="w-[288px] md:w-[330px] xl:w-[461px] max-w-full font-staatliches font-normal text-[24px] xl:text-[20px] text-justify xl:text-justify text-[#4a181b]">
      Who will find this book interesting?
    </h3>
  );

  const BookText2 = () => (
    <div className="w-[288px] md:w-[330px] xl:w-[461px] max-w-full">
      <p className="font-inter font-normal text-[14px] xl:text-[16px] text-justify text-[#121211] leading-relaxed">
        This book is ideal for fans of military history, aviation and biographies of great personalities. It will be useful for those interested in air combat tactics, the evolution of aviation and the fates of outstanding aces of the First World War.
      </p>
    </div>
  );

  const BookSub2 = () => (
    <h3 className="w-[288px] md:w-[330px] xl:w-[461px] max-w-full font-staatliches font-normal text-[24px] xl:text-[20px] tracking-tight xl:tracking-normal text-justify md:text-right xl:text-right text-[#4a181b]">
      The Red Baron's Story - A Legend in the Sky
    </h3>
  );

  const BookText3 = () => (
    <div className="w-[288px] md:w-[330px] xl:w-[577px] max-w-full relative">
      <p className="font-inter font-normal text-[16px] xl:text-[16px] text-justify text-[#1e1e1e] leading-relaxed" style={{ textShadow: '0 2px 6px 0 rgba(255, 255, 255, 0.63)' }}>
        "Manfred von Richthofen, known to the world as the Red Baron, was the greatest ace of World War I, with 80 aerial victories. His name became synonymous with skill, strategy and courage in the sky, and his bright red fighter struck fear into his enemies. This book is not just a biography. It is a journey into the world of aerial combat, revealing the secrets of tactics, describing legendary aircraft and tracing the path of the Red Baron - from a young cavalryman to the terror of the sky."
      </p>
       <div className="absolute -bottom-[7px] -right-[33px] w-[66px] h-[0px] border-t-[2px] border-[#c1262c]/30 pointer-events-none" />
       <div className="absolute -bottom-[24px] -right-[16px] w-[47px] h-[0px] border-t-[2px] border-[#c1262c]/30 origin-bottom-right rotate-90 pointer-events-none" />
       <div className="absolute bottom-[34px] -right-[16px] w-[111px] h-[0px] border-t-[2px] border-[#c1262c]/30 origin-bottom-right rotate-90 pointer-events-none" />
    </div>
  );

  const BookButton = () => (
    <RivetedButton 
      text="more of our books" 
      href="https://de.wikipedia.org/wiki/Manfred_von_Richthofen"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 md:mt-0 xl:mt-0 w-[273px] h-[38px] md:w-[199px] md:h-[34px] xl:w-[199px] xl:h-[34px] !bg-[#c1262c] md:!bg-transparent xl:!bg-transparent md:border md:border-[#c1262c] xl:border xl:border-[#c1262c] text-[24px] md:text-[16px] xl:text-[16px] text-[#fff1da] md:text-[#ff6767] xl:text-[#ff6767]"
      noRivets={true}
      noMinuses={true}
    />
  );

  return (
    <main className="flex-grow w-full bg-[#FAF7F2]">
        {/* HERO SECTION */}
        <div className="relative h-[800px] xl:h-[900px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${IMAGES.HERO_BG}')` }} />

            {/* MOBILE VERSION */}
            <div className="block md:hidden w-full h-full relative">
                <div className="absolute left-[18px] top-[37px] w-[372px] h-[49px] bg-white/3 backdrop-blur-[25px] glass-effect" />
                <h1 className="absolute left-[25px] top-[20px] max-w-[95%] font-staatliches font-normal text-[28px] leading-[113%] uppercase text-[#c1262c] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    Red Baron: The Legend That<br />Conquered the Skies
                </h1>
                <p className="absolute left-[25px] top-[120px] w-[300px] font-staatliches font-normal text-[13px] uppercase text-brand-gold">
                    Analysis of the techniques and tactics of air combat from the best pilot of the First World War.
                </p>
                <RivetedButton 
                  text="Buy the book" 
                  href="https://zalizniytato.org.ua/"
                  className="absolute left-1/2 -translate-x-1/2 top-[220px] text-[24px] text-white border border-[#c1262c] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  style={{ width: '253px', height: '53px', backgroundColor: 'rgba(193, 38, 44, 0.27)' }}
                />
            </div>

            {/* TABLET VERSION */}
            <div className="hidden md:block xl:hidden w-full h-full relative">
                <div className="absolute left-[50px] top-[90px] w-[500px] h-[80px] bg-white/3 backdrop-blur-[25px] glass-effect" />
                <h1 className="absolute left-[80px] top-[65px] font-staatliches font-normal text-[48px] uppercase text-[#c1262c] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    Red Baron:<br />The Legend That<br />Conquered the Skies
                </h1>
                <p className="absolute left-[150px] top-[180px] w-[400px] font-scheherazade font-normal text-[24px] leading-[94%] text-brand-gold drop-shadow-[0_4px_4px_rgba(0,0,0,0.49)]">
                    The story of the greatest ace of the First World War and his legendary planes.
                </p>
                <p className="absolute left-[80px] top-[350px] w-[400px] font-staatliches font-normal text-[24px] text-left uppercase text-brand-gold">
                    Analysis of the techniques and tactics of air combat from the best pilot of the First World War.
                </p>
                <RivetedButton 
                  text="Buy the book" 
                  href="https://zalizniytato.org.ua/"
                  className="absolute left-[80px] top-[450px] text-[20px] text-white border border-[#c1262c] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  style={{ width: '219px', height: '46px', backgroundColor: 'rgba(193, 38, 44, 0.27)' }}
                />
            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden xl:block w-full h-full relative max-w-[1920px] mx-auto">
                 <div className="absolute left-[99px] top-[156px] w-[820px] h-[121px] bg-white/3 backdrop-blur-[25px] glass-effect" />
                <h1 className="absolute left-[150px] top-[117px] font-staatliches font-normal text-[64px] uppercase text-[#c1262c] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-tight">
                    Red Baron: The Legend That Conquered<br />the Skies
                </h1>
                <p className="absolute left-[384px] top-[238px] w-[551px] font-scheherazade font-normal text-[32px] leading-[94%] text-brand-gold drop-shadow-[0_4px_4px_rgba(0,0,0,0.49)]">
                    The story of the greatest ace of the First World War and his legendary planes.
                </p>
                <p className="absolute left-[1300px] top-[497px] w-[495px] font-staatliches font-normal text-[32px] text-right uppercase text-brand-gold leading-tight">
                    Analysis of the techniques and tactics of air combat from the best pilot of the First World War.
                </p>
                <RivetedButton 
                  text="Buy the book" 
                  href="https://zalizniytato.org.ua/"
                  className="absolute left-[150px] top-[603px] text-[20px] text-white border border-[#c1262c] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  style={{ width: '219px', height: '46px', backgroundColor: 'rgba(193, 38, 44, 0.27)' }}
                />
            </div>
        </div>

        {/* ABOUT BOOK */}
        <section id={SectionId.ABOUT_BOOK} className="section-about-book">
            <div className="max-w-[1920px] w-full relative flex flex-col items-center">
                <div className="mt-8 xl:mt-12 mb-8 md:mb-4 xl:mb-12">
                   <BookHeader />
                </div>
                <div className="md:hidden flex flex-col items-center gap-6">
                    <BookImage />
                    <BookText1 />
                    <BookSub1 />
                    <BookText2 />
                    <BookSub2 />
                    <BookText3 />
                    <BookButton />
                </div>
                <div className="hidden md:block w-full h-[1100px] xl:h-[800px] relative">
                    <div className="absolute left-1/2 -translate-x-1/2 md:top-[160px] xl:top-[154px]">
                       <BookImage />
                    </div>
                    <div className="absolute left-[68px] md:left-[34px] xl:left-[68px] top-0 flex flex-col gap-6 items-start">
                        <BookText1 />
                        <BookSub1 />
                        <BookText2 />
                        <BookButton />
                    </div>
                    <div className="absolute right-[68px] md:right-[34px] xl:right-[68px] md:top-[380px] xl:top-auto xl:bottom-[100px] flex flex-col gap-6 items-end">
                        <BookSub2 />
                        <BookText3 />
                    </div>
                </div>
            </div>
        </section>

        {/* PLANES SECTION */}
        <section id={SectionId.ABOUT_PLANES} className="section-planes" style={{ backgroundImage: `url('${IMAGES.PLANES_BG}')` }}>
             <div className="planes-overlay" />
            <div className="max-w-[1920px] w-full relative z-10 flex flex-col items-center">
                <div className="relative inline-block group mb-12 xl:mb-20">
                    <h2 className="font-staatliches font-normal text-[#c1262c] text-[32px] md:text-[48px] xl:text-[64px] leading-[0.8] text-center">Richthofen's planes</h2>
                    <div className="absolute border-t-[2px] border-[#c1262c] h-[0px] transition-transform duration-500 ease-out z-10 top-full mt-[2px] origin-[75%_50%] right-[-10px] md:right-[-13.75px] xl:right-[-17.5px] rotate-90 group-hover:rotate-0 w-[28px] md:w-[43px] xl:w-[58px]" />
                    <div className="absolute border-t-[2px] border-[#c1262c] h-[0px] transition-transform duration-500 ease-out left-1/2 -translate-x-1/2 top-full mt-[2px] rotate-0 group-hover:rotate-180 w-[320px] md:w-[530px] xl:w-[735px]" />
                </div>
                <div className="w-full flex flex-col gap-12 xl:gap-20">
                    <div className="flex flex-col md:flex-row xl:flex-row items-center justify-center gap-6 md:gap-10 xl:gap-20">
                        <div className="bg-cover bg-center shadow-lg w-[293px] h-[191px] md:w-[382px] md:h-[255px] xl:w-[637px] xl:h-[425px]" style={{ backgroundImage: `url('${IMAGES.ALBATROS_DII}')`, transform: 'rotate(15deg)' }} />
                        <div className="flex flex-col gap-4 p-6 xl:p-10 w-[320px] md:w-[454px] xl:w-[756px] glass-effect">
                            <h3 className="font-staatliches font-normal text-[20px] xl:text-[32px] md:text-right text-justify text-[#c1262c]">Albatros D.II</h3>
                            <p className="font-inter font-normal text-[14px] xl:text-[15px] text-justify text-brand-gold leading-relaxed">
                                The Albatros D.II was a single-seat wooden biplane. The fuselage consisted of four spruce spars connected by 14 plywood frames. The frame was covered with three-layer plywood sheets of working skin bent in pairs. Removable aluminum sheets in front and aerodynamic spinner ensured smooth contours.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse xl:flex-row-reverse items-center justify-center gap-6 md:gap-10 xl:gap-20">
                         <div className="bg-cover bg-center shadow-lg w-[270px] h-[180px] md:w-[382px] md:h-[255px] xl:w-[637px] xl:h-[425px]" style={{ backgroundImage: `url('${IMAGES.ALBATROS_DIII}')`, transform: 'rotate(-10deg)' }} />
                         <div className="flex flex-col gap-4 p-6 xl:p-10 w-[320px] md:w-[454px] xl:w-[756px] glass-effect">
                            <h3 className="font-staatliches font-normal text-[20px] xl:text-[32px] md:text-left text-justify text-[#c1262c]">Albatros D.III</h3>
                            <p className="font-inter font-normal text-[14px] xl:text-[15px] text-justify text-brand-gold leading-relaxed">
                                Built with a gearless Jupiter VI engine, it featured a shorter, more angular fuselage. The design improvements made it a direct predecessor to the serial Ar 64 fighter, significantly impacting WWI aviation technology.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row xl:flex-row items-center justify-center gap-6 md:gap-10 xl:gap-20">
                         <div className="bg-cover bg-center shadow-lg w-[295px] h-[183px] md:w-[382px] md:h-[255px] xl:w-[637px] xl:h-[425px]" style={{ backgroundImage: `url('${IMAGES.FOKKER_DRI}')`, transform: 'rotate(7deg)' }} />
                         <div className="flex flex-col gap-4 p-6 xl:p-10 w-[320px] md:w-[454px] xl:w-[756px] glass-effect">
                            <h3 className="font-staatliches font-normal text-[20px] xl:text-[32px] md:text-right text-justify text-[#c1262c]">Fokker Dr.I</h3>
                            <p className="font-inter font-normal text-[14px] xl:text-[15px] text-justify text-brand-gold leading-relaxed">
                                Equipped with a 9-cylinder rotary engine, this legendary triplane featured two synchronized 7.92 mm "Spandau" machine guns. It remains the most iconic plane associated with the Red Baron's victories.
                            </p>
                            <div className="hidden md:flex justify-end mt-auto">
                                <a href="https://en.wikipedia.org/wiki/Aviation_in_World_War_I" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-[#fff1da] hover:bg-white transition-colors w-[280px] h-[39px]">
                                    <span className="font-staatliches font-normal text-[24px] text-[#c1262c]">more about airplanes</span>
                                    <ArrowIconDesktop />
                                </a>
                            </div>
                        </div>
                        <div className="flex md:hidden w-[320px] justify-start">
                            <a href="https://en.wikipedia.org/wiki/Aviation_in_World_War_I" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#fff1da] hover:bg-white transition-colors w-[238px] h-[33px]">
                                <span className="font-staatliches font-normal text-[20px] text-[#c1262c]">more about airplanes</span>
                                <ArrowIconMobile />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* BIOGRAPHY SECTION */}
        <section id={SectionId.ABOUT_RED_BARON} className="section-biography">
            <div className="max-w-[1920px] w-full flex flex-col items-center">
                <div className="relative inline-block group mb-8 md:mb-12">
                    <h2 className="font-staatliches font-normal text-[#c1262c] text-[26px] md:text-[48px] xl:text-[64px] leading-[0.8] text-center whitespace-nowrap">Biography of the Red Baron</h2>
                    <div className="absolute border-t-[2px] border-[#c1262c] h-[0px] transition-transform duration-500 ease-out z-10 top-full mt-[2px] origin-[25%_50%] left-[-10px] md:left-[-13.75px] xl:left-[-17.5px] -rotate-90 group-hover:rotate-0 w-[28px] md:w-[43px] xl:w-[58px]" />
                    <div className="absolute border-t-[2px] border-[#c1262c] h-[0px] transition-transform duration-500 ease-out left-1/2 -translate-x-1/2 top-full mt-[2px] rotate-0 group-hover:rotate-180 w-[340px] md:w-[722px] xl:w-[1006px]" />
                </div>
                <div className="flex flex-col items-center md:hidden w-full">
                    <div className="mt-[10px] w-[269px] h-[387px] bg-cover bg-center shadow-lg" style={{ backgroundImage: `url('${IMAGES.RED_BARON_PORTRAIT}')` }} />
                    <div className="mt-4 w-[320px] p-6 glass-effect">
                        <p className="text-justify font-inter font-normal text-[13px] text-[#fff1da]" style={{ textShadow: '-2px 3px 4px 0 rgba(0, 0, 0, 0.51)' }}>
                             Rittmeister Freiherr Manfred von Richthofen is undoubtedly still the world's most famous fighter pilot today. Born in 1892, he became the greatest ace of WWI. Known as "The Red Baron," a translation of his title by British enemies, he titled his own autobiography "The Red Fighter."
                        </p>
                    </div>
                    <div className="mt-4 w-[328px] h-[218px] bg-cover bg-center" style={{ backgroundImage: `url('${IMAGES.RED_BARON_PHOTO_2}')`, boxShadow: '-10px 12px 10px 0 rgba(0, 0, 0, 0.44)' }} />
                    <div className="mt-4 w-[320px] text-justify font-inter font-normal text-[13px] text-[#fff1da]" style={{ textShadow: '-2px 3px 4px 0 rgba(0, 0, 0, 0.51)' }}>
                         Quickly achieving aerial victories in Jagdstaffel 2, he became the most feared pilot. With sixteen recognized kills, he was awarded the "Pour le Mérite" order on January 12, 1917.
                    </div>
                    <div className="w-full flex justify-end mt-[10px]">
                        <RivetedButton text="read more" href="#" className="border border-[#c1262c] text-[16px] text-[#c1262c] !bg-[#fff1da] hover:!bg-white" style={{ width: '158px', height: '51px' }} />
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-12 xl:gap-20 w-full mt-8">
                    <div className="flex flex-row items-center justify-center gap-10 xl:gap-20">
                        <div className="w-[382px] h-[500px] xl:w-[637px] xl:h-[682px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url('${IMAGES.RED_BARON_PORTRAIT}')` }} />
                        <div className="relative flex flex-col gap-4 w-[454px] xl:w-[756px] p-6 xl:p-10 glass-effect">
                            <p className="font-inter font-normal text-[16px] text-justify text-[#fff1da]" style={{ textShadow: '-2px 3px 4px 0 rgba(0, 0, 0, 0.51)' }}>
                                Rittmeister Freiherr Manfred von Richthofen is undoubtedly still the world's most famous fighter pilot. Behind the propaganda figure stands an exceptionally capable young officer shaped by his era. Known today as "The Red Baron," his name became synonymous with skill, strategy and courage in the sky.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10 xl:gap-20">
                         <div className="relative flex flex-col gap-4 w-[454px] xl:w-[756px]">
                            <p className="font-inter font-normal text-[16px] text-justify xl:text-right text-[#fff1da]" style={{ textShadow: '-2px 3px 4px 0 rgba(0, 0, 0, 0.51)' }}>
                                 Transferring to fighter pilots in 1916, he quickly became the most successful German pilot. The Supreme Army Command exploited his fame for propaganda, making him a universally admired hero. He was finally awarded the "Pour le Mérite" order in early 1917.
                            </p>
                        </div>
                         <div className="w-[382px] h-[255px] xl:w-[637px] xl:h-[425px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url('${IMAGES.RED_BARON_PHOTO_2}')`, boxShadow: '-10px 12px 10px 0 rgba(0, 0, 0, 0.44)' }} />
                    </div>
                    <div className="flex justify-center mt-12">
                        <RivetedButton text="read more" href="#" className="border border-[#c1262c] text-[20px] text-[#c1262c] !bg-[#fff1da] hover:!bg-white" style={{ width: '200px', height: '50px' }} />
                    </div>
                </div>
            </div>
        </section>

        {/* BUY SECTION */}
        <section id={SectionId.BUY_NOW} className="section-buy-now">
             <div 
               className="buy-now-bg" 
               style={{ backgroundImage: `url('${IMAGES.PLANES_BG}')` }} 
             >
                <div className="buy-now-overlay" />
             </div>

             <h2 className="relative z-10 font-staatliches font-normal text-[#fff1da] text-[32px] md:text-[48px] xl:text-[64px] text-center">
                Buy different book formats
             </h2>
             
             <div className="relative z-10 w-full px-4 md:px-8 mt-[42px]">
                <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-4 xl:gap-8">
                    
                    {/* Card 1 */}
                    <div className="w-[241px] md:w-full xl:w-[300px] min-h-[420px] md:min-h-[auto] p-6 flex flex-col items-center buy-card-effect">
                        <IconBookFormat1 />
                        <h4 className="font-staatliches text-[20px] md:text-[18px] xl:text-[24px] text-brand-gold mt-4 text-center">Print Edition</h4>
                        <p className="mt-4 font-inter text-[12px] md:text-[11px] xl:text-[14px] text-center text-white/80 leading-relaxed">
                          Immerse yourself in aerial combat with a physical book. Perfect choice for collectors.
                        </p>
                        <p className="mt-auto font-staatliches text-[32px] md:text-[28px] xl:text-[36px] text-brand-gold">15$</p>
                        <RivetedButton 
                          text="ORDER NOW" 
                          href="https://zalizniytato.org.ua/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 border border-[#c1262c] text-[#c1262c] !bg-[#fff1da] hover:!bg-white text-[16px] md:text-[14px] xl:text-[20px]"
                          style={{ width: '158px', height: '42px' }}
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="w-[241px] md:w-full xl:w-[300px] min-h-[420px] md:min-h-[auto] p-6 flex flex-col items-center buy-card-effect">
                        <IconBookFormat2 />
                        <h4 className="font-staatliches text-[20px] md:text-[18px] xl:text-[24px] text-brand-gold mt-4 text-center">Audio Book</h4>
                        <p className="mt-4 font-inter text-[12px] md:text-[11px] xl:text-[14px] text-center text-white/80 leading-relaxed">
                          Listen to the fascinating story performed by a professional announcer.
                        </p>
                        <p className="mt-auto font-staatliches text-[32px] md:text-[28px] xl:text-[36px] text-brand-gold">9$</p>
                        <RivetedButton 
                          text="ORDER NOW" 
                          href="https://zalizniytato.org.ua/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 border border-[#c1262c] text-[#c1262c] !bg-[#fff1da] hover:!bg-white text-[16px] md:text-[14px] xl:text-[20px]"
                          style={{ width: '158px', height: '42px' }}
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="w-[241px] md:w-full xl:w-[300px] min-h-[420px] md:min-h-[auto] p-6 flex flex-col items-center buy-card-effect">
                        <IconBookFormat3 />
                        <h4 className="font-staatliches text-[20px] md:text-[18px] xl:text-[24px] text-brand-gold mt-4 text-center">Digital E-Book</h4>
                        <p className="mt-4 font-inter text-[12px] md:text-[11px] xl:text-[14px] text-center text-white/80 leading-relaxed">
                          Read anywhere. Electronic version available in convenient formats.
                        </p>
                        <p className="mt-auto font-staatliches text-[32px] md:text-[28px] xl:text-[36px] text-brand-gold">5$</p>
                        <RivetedButton 
                          text="ORDER NOW" 
                          href="https://zalizniytato.org.ua/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 border border-[#c1262c] text-[#c1262c] !bg-[#fff1da] hover:!bg-white text-[16px] md:text-[14px] xl:text-[20px]"
                          style={{ width: '158px', height: '42px' }}
                        />
                    </div>
                </div>
             </div>

             <div className="payment-strip">
               <div className="flex flex-col items-center justify-center">
                 <IconTheReadersCombined />
               </div>
               
               <div className="flex flex-col items-center justify-center">
                 <IconPayment2New />
               </div>
               
               <div className="flex flex-col items-center justify-center gap-1">
                 <IconPayment3 />
                 <div className="flex flex-col items-center">
                    <IconPaymentSub5 />
                 </div>
               </div>
               
               <div className="flex flex-col items-center justify-center">
                 <IconPayment4 />
               </div>
             </div>
        </section>
    </main>
  );
};

export default Home;
