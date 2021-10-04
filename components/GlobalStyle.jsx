import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  :root{
    --grey900: #37373c;
    --grey700: #62626c;
    --grey100: #F8F8F9;
    --green500: #00c185;
    --brandBlue100: #e9f5ff;
    --brandBlue500: #1e64f0;
    --elevation3: 0 8px 16px rgba(0, 0, 0, 0.05);
    color: var(--grey900)
  }

  body {
    font-size: 16px;
    font-weight: normal;
    margin: 0 auto;
    background: black;
    color: var(--grey900)
  }
  h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
  }
  img {
    border: 0px;
    width: 100%;
  }

  a {
    all: unset;
  }

  button{
    all: unset;
  }
`;
