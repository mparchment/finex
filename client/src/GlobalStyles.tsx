import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --bg: #242526;
    --bg-accent: #484a4d;
    --bg-dark: #18191a;
    --primary-color: #2596BE;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--text-color)
    text-decoration: none;
  }
`;

export default GlobalStyles;
