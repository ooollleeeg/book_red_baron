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
    className="payment-shadow"
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
    className="payment-shadow"
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

const ArrowIconMobile: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="53" height="24" viewBox="0 0 53 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9.547C0.895431 9.547 9.65645e-08 10.4424 0 11.547C-9.65645e-08 12.6516 0.89543 13.547 2 13.547L2 9.547ZM53 11.547L33 -5.87296e-06L33 23.094L53 11.547ZM2 13.547L35 13.547L35 9.547L2 9.547L2 13.547Z" fill="#C1262C" />
  </svg>
);

const ArrowIconDesktop: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9.547C0.89543 9.547 0 10.4424 0 11.547C0 12.6516 0.89543 13.547 2 13.547V9.547ZM57 11.547L37 -8.58307e-06V23.094L57 11.547ZM2 13.547H39V9.547H2V13.547Z" fill="#C1262C" />
  </svg>
);

const SectionHeader: React.FC<{ title: string; sideLineClass?: string; mainLineWidth?: string; sideLineWidth?: string }> = ({ 
  title, sideLineClass = "origin-[25%_50%] left-[-10px]", mainLineWidth = "168px", sideLineWidth = "28px" 
}) => (
  <div className="section-header-group group">
    <h2 className="section-title text-[32px] md:text-[48px] xl:text-[64px]">
      {title}
    </h2>
    <div 
      className={`header-line-side ${sideLineClass} -rotate-90 group-hover:rotate-0`} 
      style={{ width: sideLineWidth }} 
    />
    <div 
      className="header-line-main group-hover:rotate-180" 
      style={{ width: mainLineWidth }} 
    />
  </div>
);

const Home: React.FC = () => {
  return (
    <main className="flex-grow w-full bg-[#FAF7F2]">
        {/* HERO SECTION */}
        <div className="hero-container desktop-hero hidden xl:block">
            <div className="hero-bg" style={{ backgroundImage: `url('${IMAGES.HERO_BG}')` }} />
            <div className="hero-content-wrapper">
                <div className="hero-glass-bar" />
                <h1 className="hero-title absolute">
                    Red Baron: The Legend That Conquered<br />the Skies
                </h1>
                <p className="hero-subtitle absolute">
                    The story of the greatest ace of the First World War and his legendary planes.
                </p>
                <p className="hero-desc absolute">
                    Analysis of the techniques and tactics of air combat from the best pilot of the First World War.
                </p>
                <RivetedButton 
                  text="Buy the book" 
                  href={`#${SectionId.BUY_NOW}`}
                  className="absolute left-[150px] top-[603px] text-[20px] text-white border border-[#c1262c]"
                  style={{ width: '219px', height: '46px', backgroundColor: 'rgba(193, 38, 44, 0.27)' }}
                />
            </div>
        </div>

        {/* HERO TABLET */}
        <div className="hero-container tablet-hero hidden md:block xl:hidden">
            <div className="hero-bg" style={{ backgroundImage: `url('${IMAGES.HERO_BG}')` }} />
            <div className="hero-content-wrapper">
                <div className="hero-glass-bar" />
                <h1 className="hero-title absolute">
                    Red Baron:<br />The Legend That<br />Conquered the Skies
                </h1>
                <p className="hero-subtitle absolute">
                    The story of the greatest ace of the First World War and his legendary planes.
                </p>
                <p className="hero-desc absolute">
                    Analysis of the techniques and tactics of air combat from the best pilot of the First World War.
                </p>
                <RivetedButton 
                  text="Buy the book" 
                  href={`#${SectionId.BUY_NOW}`}
                  className="absolute left-[80px] top-[450px] text-[20px] text-white border border-[#c1262c]"
                  style={{ width: '219px', height: '46px', backgroundColor: 'rgba(193, 38, 44, 0.27)' }}
                />
            </div>
        </div>

        {/* HERO MOBILE */}
        <div className="hero-container mobile-hero md:hidden">
            <div className="hero-bg" style={{ backgroundImage: `url('${IMAGES.HERO_BG}')` }} />
            <div className="hero-content-wrapper">
                <div className="hero-glass-bar" />
                <h1 className="hero-title absolute">
                    Red Baron: The Legend That<br />Conquered the Skies
                </h1>
                <p className="hero-desc absolute">
                    Analysis of the techniques and tactics of air combat from the best pilot of the First World War.
                </p>
                <RivetedButton 
                  text="Buy the book" 
                  href={`#${SectionId.BUY_NOW}`}
                  className="absolute left-1/2 -translate-x-1/2 top-[220px] text-[24px] text-white border border-[#c1262c]"
                  style={{ width: '253px', height: '53px', backgroundColor: 'rgba(193, 38, 44, 0.27)' }}
                />
            </div>
        </div>

        {/* ABOUT BOOK */}
        <section id={SectionId.ABOUT_BOOK} className="section-about-book">
            <div className="max-w-[1920px] mx-auto flex flex-col items-center">
                <div className="mt-8 mb-12">
                   <SectionHeader title="About book" sideLineWidth="58px" mainLineWidth="387px" />
                </div>
                
                <div className="book-content-grid">
                    <div className="absolute left-1/2 -translate-x-1/2 top-[154px]">
                       <div className="book-image-frame" style={{ backgroundImage: `url('${IMAGES.ABOUT_BOOK_BG}')` }} />
                    </div>
                    
                    <div className="absolute left-[68px] top-0 flex flex-col gap-6">
                        <div className="w-[461px] relative">
                            <div className="book-decorative-lines top-[-7px] -left-[33px] w-[66px]" />
                            <div className="book-decorative-lines top-[-24px] -left-[16px] w-[47px] rotate-90" />
                            <div className="book-decorative-lines top-[34px] -left-[16px] w-[111px] rotate-90" />
                            <p className="book-text-block text-[16px]">
                                "Iron Birds" is a detailed and gripping account of the life and military career of Manfred von Richthofen, known to the world as the Red Baron.
                            </p>
                        </div>
                        <h3 className="font-staatliches text-[20px] text-[#4a181b]">Who will find this book interesting?</h3>
                        <p className="book-text-block w-[461px] text-[16px]">
                            Ideal for fans of military history, aviation and biographies of great personalities.
                        </p>
                        <RivetedButton 
                          text="more of our books" 
                          href="https://zalizniytato.org.ua/"
                          className="w-[199px] h-[34px] !bg-transparent border border-[#c1262c] text-[#ff6767]"
                          noRivets noMinuses
                        />
                    </div>

                    <div className="absolute right-[68px] bottom-[100px] flex flex-col gap-6 items-end">
                        <h3 className="font-staatliches text-[20px] text-[#4a181b] text-right">The Red Baron's Story - A Legend in the Sky</h3>
                        <div className="w-[577px] relative">
                            <p className="book-text-block text-[16px] text-justify" style={{ textShadow: '0 2px 6px white' }}>
                                Manfred von Richthofen was the greatest ace of World War I, with 80 aerial victories. His name became synonymous with skill, strategy and courage.
                            </p>
                            <div className="book-decorative-lines -bottom-[7px] -right-[33px] w-[66px]" />
                            <div className="book-decorative-lines -bottom-[24px] -right-[16px] w-[47px] rotate-90" />
                            <div className="book-decorative-lines bottom-[34px] -right-[16px] w-[111px] rotate-90" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* PLANES SECTION */}
        <section id={SectionId.ABOUT_PLANES} className="section-planes" style={{ backgroundImage: `url('${IMAGES.PLANES_BG}')` }}>
             <div className="planes-overlay" />
             <div className="max-w-[1920px] mx-auto relative z-10 flex flex-col items-center">
                <div className="mb-20">
                    <SectionHeader title="Richthofen's planes" sideLineClass="origin-[75%_50%] right-[-17.5px]" sideLineWidth="58px" mainLineWidth="735px" />
                </div>
                
                <div className="flex flex-col gap-20 w-full">
                    {/* Plane 1 */}
                    <div className="plane-card">
                        <div className="plane-image w-[637px] h-[425px]" style={{ backgroundImage: `url('${IMAGES.ALBATROS_DII}')`, transform: 'rotate(15deg)' }} />
                        <div className="plane-info-box glass-effect">
                            <h3 className="font-staatliches text-[32px] text-[#c1262c] text-right">Albatros D.II</h3>
                            <p className="font-inter text-[15px] text-justify text-brand-gold leading-relaxed">
                                The Albatros D.II was a single-seat wooden biplane. The fuselage consisted of four spruce spars connected by 14 plywood frames.
                            </p>
                        </div>
                    </div>
                    {/* Plane 2 */}
                    <div className="plane-card md:flex-row-reverse">
                        <div className="plane-image w-[637px] h-[425px]" style={{ backgroundImage: `url('${IMAGES.ALBATROS_DIII}')`, transform: 'rotate(-10deg)' }} />
                        <div className="plane-info-box glass-effect">
                            <h3 className="font-staatliches text-[32px] text-[#c1262c] text-left">Albatros D.III</h3>
                            <p className="font-inter text-[15px] text-justify text-brand-gold leading-relaxed">
                                Built with a gearless Jupiter VI engine, it featured a shorter, more angular fuselage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* BUY SECTION */}
        <section id={SectionId.BUY_NOW} className="section-buy-now">
             <div className="buy-now-bg" style={{ backgroundImage: `url('${IMAGES.PLANES_BG}')` }}>
                <div className="buy-now-overlay" />
             </div>

             <h2 className="relative z-10 font-staatliches text-brand-gold text-[64px] text-center mb-10">
                Buy different book formats
             </h2>
             
             <div className="relative z-10 w-full max-w-[1200px] px-8">
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className="buy-card buy-card-effect">
                        <IconBookFormat1 />
                        <h4 className="font-staatliches text-[24px] text-brand-gold mt-4">Print Edition</h4>
                        <p className="mt-4 font-inter text-[14px] text-center text-white/80 leading-relaxed">
                          Immerse yourself in aerial combat with a physical book.
                        </p>
                        <p className="mt-auto font-staatliches text-[36px] text-brand-gold">15$</p>
                        <RivetedButton 
                          text="ORDER NOW" 
                          href="https://zalizniytato.org.ua/"
                          className="mt-4 border border-[#c1262c] text-[#c1262c] !bg-[#fff1da] hover:!bg-white"
                          style={{ width: '158px', height: '42px' }}
                        />
                    </div>

                    <div className="buy-card buy-card-effect">
                        <IconBookFormat2 />
                        <h4 className="font-staatliches text-[24px] text-brand-gold mt-4">Audio Book</h4>
                        <p className="mt-4 font-inter text-[14px] text-center text-white/80 leading-relaxed">
                          Listen to the fascinating story performed by a professional announcer.
                        </p>
                        <p className="mt-auto font-staatliches text-[36px] text-brand-gold">9$</p>
                        <RivetedButton 
                          text="ORDER NOW" 
                          href="https://zalizniytato.org.ua/"
                          className="mt-4 border border-[#c1262c] text-[#c1262c] !bg-[#fff1da] hover:!bg-white"
                          style={{ width: '158px', height: '42px' }}
                        />
                    </div>
                </div>
             </div>

             <div className="payment-strip">
               <div className="payment-icon-wrapper"><IconTheReadersCombined /></div>
               <div className="payment-icon-wrapper"><IconPayment2New /></div>
               <div className="payment-icon-wrapper">
                 <IconPayment3 />
                 <IconPaymentSub5 />
               </div>
               <div className="payment-icon-wrapper"><IconPayment4 /></div>
             </div>
        </section>
    </main>
  );
};

export default Home;
