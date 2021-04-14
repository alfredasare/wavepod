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
    from {
      opacity: 0;
    }
    to {
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

  @keyframes leftLine {
    0% {
      stroke-dashoffset: 14;
    }

    4% {
      stroke-dashoffset: 12;
    }

    8% {
      stroke-dashoffset: 10;
    }

    16% {
      stroke-dashoffset: 8;
    }

    20% {
      stroke-dashoffset: 6;
    }

    24% {
      stroke-dashoffset: 7;
    }

    28% {
      stroke-dashoffset: 8;
    }

    32% {
      stroke-dashoffset: 10;
    }

    36% {
      stroke-dashoffset: 8;
    }

    40% {
      stroke-dashoffset: 8;
    }

    44% {
      stroke-dashoffset: 6;
    }

    48% {
      stroke-dashoffset: 4;
    }

    52% {
      stroke-dashoffset: 2;
    }

    56% {
      stroke-dashoffset: 3;
    }

    60% {
      stroke-dashoffset: 3;
    }

    64% {
      stroke-dashoffset: 4;
    }

    68% {
      stroke-dashoffset: 6;
    }

    72% {
      stroke-dashoffset: 5;
    }

    76% {
      stroke-dashoffset: 4;
    }

    80% {
      stroke-dashoffset: 3;
    }

    84% {
      stroke-dashoffset: 2;
    }

    88% {
      stroke-dashoffset: 6;
    }

    92% {
      stroke-dashoffset: 10;
    }

    96% {
      stroke-dashoffset: 12;
    }

    100% {
      stroke-dashoffset: 14;
    }
  }

  @keyframes midLine {
    0% {
      stroke-dashoffset: 2;
    }
    4% {
      stroke-dashoffset: 4;
    }
    8% {
      stroke-dashoffset: 6;
    }
    16% {
      stroke-dashoffset: 7;
    }
    20% {
      stroke-dashoffset: 7;
    }
    24% {
      stroke-dashoffset: 7;
    }
    28% {
      stroke-dashoffset: 6;
    }
    32% {
      stroke-dashoffset: 8;
    }
    36% {
      stroke-dashoffset: 4;
    }
    40% {
      stroke-dashoffset: 4;
    }
    44% {
      stroke-dashoffset: 2;
    }
    48% {
      stroke-dashoffset: 6;
    }
    52% {
      stroke-dashoffset: 8;
    }
    56% {
      stroke-dashoffset: 10;
    }
    60% {
      stroke-dashoffset: 9;
    }
    64% {
      stroke-dashoffset: 6;
    }
    68% {
      stroke-dashoffset: 5;
    }
    72% {
      stroke-dashoffset: 4;
    }
    76% {
      stroke-dashoffset: 3;
    }
    80% {
      stroke-dashoffset: 3;
    }
    84% {
      stroke-dashoffset: 4;
    }
    88% {
      stroke-dashoffset: 4;
    }
    92% {
      stroke-dashoffset: 8;
    }
    96% {
      stroke-dashoffset: 6;
    }
    to {
      stroke-dashoffset: 8;
    }
  }

  @keyframes rightLine {
    0% {
      stroke-dashoffset: 12;
    }
    4% {
      stroke-dashoffset: 8;
    }
    8% {
      stroke-dashoffset: 6;
    }
    16% {
      stroke-dashoffset: 4;
    }
    20% {
      stroke-dashoffset: 2;
    }
    24% {
      stroke-dashoffset: 2;
    }
    28% {
      stroke-dashoffset: 6;
    }
    32% {
      stroke-dashoffset: 8;
    }
    36% {
      stroke-dashoffset: 10;
    }
    40% {
      stroke-dashoffset: 12;
    }
    44% {
      stroke-dashoffset: 14;
    }
    48% {
      stroke-dashoffset: 12;
    }
    52% {
      stroke-dashoffset: 8;
    }
    56% {
      stroke-dashoffset: 6;
    }
    60% {
      stroke-dashoffset: 4;
    }
    64% {
      stroke-dashoffset: 4;
    }
    68% {
      stroke-dashoffset: 5;
    }
    72% {
      stroke-dashoffset: 4;
    }
    76% {
      stroke-dashoffset: 6;
    }
    80% {
      stroke-dashoffset: 4;
    }
    84% {
      stroke-dashoffset: 2;
    }
    88% {
      stroke-dashoffset: 2;
    }
    92% {
      stroke-dashoffset: 4;
    }
    96% {
      stroke-dashoffset: 6;
    }
    to {
      stroke-dashoffset: 8;
    }
  }
  
  .line1 {
    -webkit-animation: leftLine 1.5s linear infinite;
    animation: leftLine 1.5s linear infinite;
    stroke-dasharray: 16;
  }
  
  .line2 {
    -webkit-animation: leftLine 1.5s linear infinite;
    animation: midLine 1.5s linear infinite;
    stroke-dasharray: 16;
  }
  
  .line3 {
    -webkit-animation: leftLine 1.5s linear infinite;
    animation: rightLine 1.5s linear infinite;
    stroke-dasharray: 16;
  }
`;
