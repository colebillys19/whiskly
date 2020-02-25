import { createGlobalStyle } from 'styled-components';

import { backgroundOffWhite } from './styleConstants';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${backgroundOffWhite};
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  body * {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2rem;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  /*** popover styles, popovers used w/ SearchForm/CohortSelect & SearchForm/SearchField ***/

  .MuiMenu-paper {
    border: 0.1rem solid #ccc;
    border-radius: 0.2rem;
    width: 4.8rem !important;
  }

  .MuiList-root {
    padding: 0;
  }

  .MuiMenuItem-root {
    display: flex;
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }
  }
`;

export default GlobalStyle;
