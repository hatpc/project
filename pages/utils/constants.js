const ARROW_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline></svg>`;
const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline></svg>`;

const ICON_LEFT = `<svg xmlns="http://www.w3.org/2000/svg"
                    id="prefix__Icon_chevron-left" width="24" height="24" viewBox="0 0 24 24">
                    <path id="prefix__Rectangle_679" fill="none" d="M0 0H24V24H0z" data-name="Rectangle 679"/>
                    <path id="prefix__chevron-left" fill="none" stroke="#131313" stroke-linecap="round"
                    stroke-linejoin="round" d="M15 18l-6-6 6-6" transform="translate(.5 .5)"/></svg>`;
const ICON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" id="prefix__Icon_chevron-left"
                    width="24" height="24" viewBox="0 0 24 24" style="transform: rotate(180deg);">
                    <path id="prefix__Rectangle_679" fill="none" d="M0 0H24V24H0z" data-name="Rectangle 679"/>
                    <path id="prefix__chevron-left" fill="none" stroke="#131313" stroke-linecap="round"
                    stroke-linejoin="round" d="M15 18l-6-6 6-6" transform="translate(.5 .5)"/></svg>`;

const NAV_LEFT = `<svg width="66" height="100" viewBox="0 0 66 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M20.5894 51.6371L41.0438 78.9089C41.9478 80.114 43.6569 80.358 44.862 79.4544C46.0671 78.5506 46.3113 76.8411 45.4074 75.6362L26.1803 50.0006L45.4075 24.3638C46.3113 23.1589 46.0669 21.4493 44.862 20.5457C44.3715 20.1777 43.7973 20 43.2278 20C42.3986 20 41.5797 20.3768 41.0438 21.0911L20.5894 48.3644C19.8622 49.334 19.8622 50.6675 20.5894 51.6371Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="0.0429688" y="0" width="65.9092" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`;

const NAV_RIGHT = `<svg width="66" height="100" viewBox="0 0 66 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M45.4106 48.3629L24.9562 21.0911C24.0522 19.886 22.3431 19.642 21.138 20.5456C19.9329 21.4494 19.6887 23.1589 20.5926 24.3638L39.8197 49.9994L20.5926 75.6362C19.6887 76.8411 19.9331 78.5507 21.138 79.4543C21.6285 79.8223 22.2027 80 22.7722 80C23.6014 80 24.4203 79.6232 24.9562 78.9089L45.4106 51.6356C46.1379 50.666 46.1379 49.3325 45.4106 48.3629Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="0.046875" y="0" width="65.9092" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`;

const NEXT_SERVICED_BANNER = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" transform="rotate(-180 24 24)" fill="black" fill-opacity="0.8"/>
<path d="M20 14L30 24L20 34" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const PRE_SERVICED_BANNER = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="black" fill-opacity="0.8"/>
<path d="M28 34L18 24L28 14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export {
  ARROW_LEFT,
  ARROW_RIGHT,
  ICON_LEFT,
  ICON_RIGHT,
  // isMobile,
  NAV_LEFT,
  NAV_RIGHT,
  NEXT_SERVICED_BANNER,
  PRE_SERVICED_BANNER,
};
