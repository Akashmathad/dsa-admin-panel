import { createGlobalStyle } from 'styled-components';

/* -FONT sizes(px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

-Font weights
Defualt: 400;
500
600
700

-Line heights
Defualt: 1;
1.05
1.2
Paragraph defualt:1.6

-Letter spacing
-0.5px
0.75px

-Spacing System(px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 */

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
padding: 0;
box-sizing: border-box;
}

::-webkit-scrollbar{

width: 6px;
height: 10px;
}

::-webkit-scrollbar-thumb{
  background-color: var(--color-grey-600);
  border-radius: 9px;
}

::-webkit-scrollbar-track {

  background: var(--color-grey-200); 
}

body{
  font-weight: 400;
  line-height: 1;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 1.6rem;
  color: var(--color-grey-950);
  background-color: var(--color-grey-50);
}

html{
  font-size: 62.5%;
}
:root {
   &.light-mode {
  /* Grey */
  --color-grey-50: #f3f4f6;
  --color-grey-100: #e5e5e5;
  --color-grey-200: #e5e5e5;
  --color-grey-300: #d4d4d4;
  --color-grey-400: #a3a3a3;
  --color-grey-500: #737373;
  --color-grey-600: #525252;
  --color-grey-700: #404040;
  --color-grey-800: #262626;
  --color-grey-900: #171717;
  --color-grey-950: #0a0a0a;
  


  --color-blue-200: #bae6fd;
  --color-blue-300: #7dd3fc;
  --color-blue-400: #38bdf8;
  --color-blue-500: #0ea5e9;
  --color-blue-600: #0284c7;
  --color-blue-700: #0369a1;
  --color-blue-800: #075985;


  --color-red-300: #fecaca;
  --color-red-300: #fca5a5;
  --color-red-400: #f87171;
  --color-red-500: #ef4444;
  --color-red-600: #dc2626;
  --color-red-700: #b91c1c;
  --color-red-700: #991b1b;


  --color-green-300: #bbf7d0;
  --color-green-300: #86efac;
  --color-green-400: #4ade80;
  --color-green-500: #22c55e;
  --color-green-600: #16a34a;
  --color-green-700: #15803d;
  --color-green-700: #166534;



  --color-brand-50: #fffbeb;
  --color-brand-100: #fef9c3;
  --color-brand-200: #fde68a;
  --color-brand-300: #fcd34d;
  --color-brand-400: #fbbf24;
  --color-brand-500: #f59e0b;
  --color-brand-600: #d97706;
  --color-brand-700: #92400e;
  --color-brand-800: #92400e;
  --color-brand-900: #713f12;
  --color-brand-950: #422006;



  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &,&.dark-mode {
    --color-grey-950: #f9fafb;
  --color-grey-900: #f3f4f6;
  --color-grey-800: #e5e5e5;
  --color-grey-700: #d4d4d4;
  --color-grey-600: #a3a3a3;
  --color-grey-500: #737373;
  --color-grey-400: #525252;
  --color-grey-300: #404040;
  --color-grey-200: #262626;
  --color-grey-100: #171717;
  --color-grey-50: #0a0a0a;
  


  --color-blue-800: #bae6fd;
  --color-blue-700: #7dd3fc;
  --color-blue-600: #38bdf8;
  --color-blue-500: #0ea5e9;
  --color-blue-400: #0284c7;
  --color-blue-300: #0369a1;
  --color-blue-200: #075985;


  --color-red-800: #fecaca;
  --color-red-700: #fca5a5;
  --color-red-600: #f87171;
  --color-red-500: #ef4444;
  --color-red-400: #dc2626;
  --color-red-300: #b91c1c;
  --color-red-200: #991b1b;


  --color-green-800: #bbf7d0;
  --color-green-700: #86efac;
  --color-green-600: #4ade80;
  --color-green-500: #22c55e;
  --color-green-400: #16a34a;
  --color-green-300: #15803d;
  --color-green-200: #166534;


  --color-brand-950: #fffbeb;
  --color-brand-900: #fef9c3;
  --color-brand-800: #fde68a;
  --color-brand-700: #fcd34d;
  --color-brand-600: #fbbf24;
  --color-brand-500: #f59e0b;
  --color-brand-400: #d97706;
  --color-brand-300: #92400e;
  --color-brand-200: #92400e;
  --color-brand-100: #713f12;
  --color-brand-50: #422006;



--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}

  .toast{
    max-width: 50rem;
    font-size: 2rem;
    padding: 1.2rem 3.2rem;
    background-color: var(--color-grey-100);
    color: var(--color-grey-900);
    z-index: 10;
    line-height: 1.6;
  }

  .toast-success{
    border: 1px solid var(--color-green-200);
  }

  .toast-fail{
    border: 1px solid var(--color-red-600);
  }


  @media (max-width: 34em) {
    html{
      font-size: 46%;
    }
  }

`;

export default GlobalStyles;
