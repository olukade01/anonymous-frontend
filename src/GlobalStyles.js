import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: linear-gradient(45deg, #00dbde, #fc00ff);
    min-height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }
`;

export default GlobalStyles;
