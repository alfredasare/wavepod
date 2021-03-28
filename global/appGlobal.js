import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  
  ${({fluid}) => 
          fluid &&
          css`
            padding: 0;
            margin: 0;
            width: 100% !important;
          `}
  ;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 50%;
  }

  @media screen and (min-width: 1441px) {
    width: 33%;
  }
`;