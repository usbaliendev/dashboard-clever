import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.base};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  
  h1 {
    color: ${({ theme }) => theme.colors.ascColr};
    font-size: 16px;
  }
  p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
  }
  `;

export const Container = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;
