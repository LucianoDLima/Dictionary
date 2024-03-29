import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button, 
  select,
  option,
  input {
    background-color: unset;
    border: unset;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    width: 100%;
  }

`;

export const BaseStyle = createGlobalStyle<{ selectedFont?: string }>`
  body {
    background-color: var(--clr-bg-primary);
    color: var(--clr-body-primary);
    font-family: ${(props) => props.selectedFont}, sans-serif, var(--fm-auto);
  }

  /* Hide element from dom. Screen readers can still read it */
  .screen-reader {
  border: 0;
  clip-path: inset(50%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
}

  /* Remove animations for those who prefer it */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: 0s !important;
      animation: none !important;
    }
  }
`;

export const VariablesStyle = createGlobalStyle`
  :root {
    /* -- Colors -- */
    --white: hsl(0, 0%, 100%);
    --wild-sand: hsl(0, 0%, 96%);
    --mercury: hsl(0, 0%, 91%);
    --alto: hsl(0, 0%, 81%);
    --boulder: hsl(0, 0%, 51%);
    --gray: hsl(0, 0%, 40%);
    --mine-shaft--hard: hsl(0, 0%, 23%);
    --mine-shaft--medium: hsl(0, 0%, 18%);
    --mine-shift--soft: hsl(0, 0%, 12%);
    --black: hsl(0, 0%, 2%);
    --sunset-orange: hsl(0, 100%, 66%);
    --medium-purple: hsl(274, 82%, 60%);

    /* -- Font Family -- */
    --fm-auto: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    
    --fm-primary: 'Sans-serif', var(--fm-auto);
    --fm-secondary: 'Serif', var(--fm-auto);
    --fm-tertiary: 'Monospace', var(--fm-auto);

    /* -- Font Size -- */
    --fs-heading-XL: 4rem;
    --fs-heading-L: 2rem;
    --fs-heading-M: 1.5rem;
    --fs-heading-S: 1.25rem;
    --fs-body-M: 1.125rem;
    --fs-default: 1rem;
    --fs-body-S: 0.9375rem;
    --fs-body-XS: 0.875rem;

    /* -- Paddings and margins -- */
    --p-mobile: 1.5rem;

    /* -- Widths -- */
    --w-max-width: 46rem;

    /* -- Animation speed -- */
    --spe-very-quick: 175ms;
    --spe-quick: 250ms;
    --spe-slow: 325ms;
    --spe-very-slow: 450ms; 
  }
`;

export const ThemeStyle = createGlobalStyle`
  [data-theme="light"] {
    --clr-bg-primary: var(--white);
    --clr-bg-secondary: var(--wild-sand);
    --clr-bg-tertiary: var(--alto);
    --clr-body-primary: var(--mine-shaft--medium);
    --clr-body-secondary: var(--gray); 
    --clr-accent: var(--medium-purple);
    --clr-error: var(--sunset-orange);
    --clr-bg-toggle: var(--boulder);
    --clr-button-toggle: var(--white);
    --clr-outline-accessibility: var(--black);
  }

  [data-theme="dark"] {
    --clr-bg-primary: var(--black);
    --clr-bg-secondary: var(--mine-shaft--hard);
    --clr-bg-tertiary: var(--mine-shaft--medium);
    --clr-body-primary: var(--white);
    --clr-body-secondary: var(--boulder);
    --clr-accent: var(--medium-purple);
    --clr-error: var(--sunset-orange);
    --clr-bg-toggle: var(--medium-purple);
    --clr-button-toggle: var(--white);
    --clr-outline-accessibility: var(--white);
  }
`;
