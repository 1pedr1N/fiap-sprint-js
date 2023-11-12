import { createGlobalStyle } from 'styled-components';

const ResetCSS = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, dl, dd, ol, ul, figure, fieldset, legend {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
    font-family: Arial, sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, select, textarea {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default ResetCSS;
