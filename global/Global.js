import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { palette, primaryFont } from '@/utils/index';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  ;

  * {
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

  svg {
    .cls-31 {
      fill: url(#linear-gradient);
    }
  }

  .nav-link-active {
    color: ${palette.radicalRed};
  }

  .hide-overflow {
    overflow-y: hidden;
  }

  @keyframes fade-in {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;
