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
  width: 0.6rem;

}

::-webkit-scrollbar-thumb{
  background-color: #fff;
  border-radius: 7px;
}

body{
  font-weight: 400;
  line-height: 1;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 1.6rem;
  color: var(--color-grey-900);
  background-color: var(--color-grey-0);
}

html{
  font-size: 62.5%;
}
:root {
   &.light-mode {
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-green-700: #86efac;
--color-green-600: #4ade80;
--color-green-500:#22c55e;
--color-green-400:#16a34a;
--color-green-300:#15803d;
--color-yellow-100: #854d0e;
--color-yellow-500: #eab308;
--color-yellow-700: #fef9c3;



--color-red-700: #fca5a5;
--color-red-600: #f87171;
--color-red-500: #ef4444;
--color-red-400: #dc2626;
--color-red-300: #b91c1c;

  --color-brand-900: #e0e7ff;
  --color-brand-800: #c7d2fe;
  --color-brand-700: #a5b4fc;
  --color-brand-600: #818cf8;
  --color-brand-500: #6366f1;
  --color-brand-400: #4f46e5;
  --color-brand-300: #4338ca;
  --color-brand-200: #3730a3;
  --color-brand-100: #312e81;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &,&.dark-mode {
    --color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-green-300: #86efac;
--color-green-400: #4ade80;
--color-green-500:#22c55e;
--color-green-600:#16a34a;
--color-green-700:#15803d;
--color-yellow-100: #854d0e;
--color-yellow-500: #eab308;
--color-yellow-700: #fef9c3;



--color-red-300: #fca5a5;
--color-red-400: #f87171;
--color-red-500: #ef4444;
--color-red-600: #dc2626;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-400: #818cf8;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

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
