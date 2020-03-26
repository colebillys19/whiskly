import { createGlobalStyle } from 'styled-components';

import { backgroundColor, boxShadow } from './styleConstants';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${backgroundColor};
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
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  /**************************************************/
  /********** autocomplete & select styles **********/
  /**************************************************/

  .MuiMenu-paper {
    border: 0.1rem solid #ccc;
    border-radius: 0.2rem;
    box-shadow: ${boxShadow};
    width: 5rem !important;
  }

  .MuiList-root {
    padding: 0;
  }

  .MuiMenuItem-root {
    color: #393569;
    display: flex;
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }
  }

  .MuiListItem-root.Mui-selected,
  .MuiAutocomplete-option[aria-selected="true"] {
    color: #219df9;
  }

  .MuiListItem-root.Mui-selected:not(:hover),
  .MuiAutocomplete-option[aria-selected="true"]:not(:hover) {
    background-color: white;
  }

  .MuiAutocomplete-paper {
    border-radius: 0.2rem;
    border: 0.1rem solid #ccc;
    margin: 0;
    box-shadow: ${boxShadow};
  }

  .MuiAutocomplete-listbox {
    padding: 0;
  }

  .MuiAutocomplete-option {
    color: #393569;
    padding-left: 1.5rem;
    padding-right: 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }
  }

  .MuiAutocomplete-clearIndicator {
    display: relative;
    bottom: 0.6rem;
  }
`;

export default GlobalStyle;
