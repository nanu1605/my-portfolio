import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #f0f0f0;
    color: #333;
  }

  h1, h2 {
    margin-bottom: 1em;
  }

  section {
    padding: 2em;
  }
`;
