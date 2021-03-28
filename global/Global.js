import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { primaryFont } from '@/utils/index';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  *{
    text-decoration: none;
  }
  
  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${primaryFont};
    overflow-x: hidden;
  }
  
  *, :after, :before {
    box-sizing: border-box;
  }
  
  h1 {
    font-size: 10rem;
    color: red;
  }
`;
