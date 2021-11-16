import styled from "styled-components";

/* MAIN CONTENT */
export const SectionContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.base};
  height: 100vh;
  left: ${({ isopen }) => (isopen ? "260px" : "78px")};
  width: ${({ isopen }) =>
    isopen ? "calc(100% - 260px)" : "calc(100% - 78px)"};
  //width: calc(100% - 260px);
  transition: all 0.5s ease;
  .home-section.close {
    left: 78px;
    width: calc(100% - 78px);
  }
  .home-content {
    height: 60px;
    display: flex;
    align-items: center;
  }
  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 25px;
    font-weight: 600;
    padding-left: 15px;
  }
`;

/* NAVBAR */
export const NavBar = styled.nav`
  top: 0;
  position: fixed;
  background: ${({ theme }) => theme.colors.base};
  box-shadow: 0px 3px ${({ theme }) => theme.colors.mdColr};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  z-index: 1;
  .navbar-sticky {
    animation: moveDown 0.5s ease-in-out;
  }
`;

/* SEARCH WRAP */
export const SearchWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  input {
    padding-left: 10px;
    border-radius: 10px;
    border-width: 1px;
    width: 70%;
    height: 25px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
  }
`;

/* USER AREA */
export const UserBox = styled.div`
  float: right;
  height: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.base};
  font-size: ${({ theme }) => theme.colors.text};
  align-items: center;
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    text-align: center;
  }
  h6 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 10px;
    text-align: center;
  }
`;

export const ImgBox = styled.div`
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.colors.base};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 35px;
    border-radius: 8px;
  }
`;

/* CONTENT ELEMENT */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  h1 {
    color: ${({ theme }) => theme.colors.ascColr};
    font-size: 16px;
    font-weight: 600;
    padding-left: 15px;
  }
  p {
    font-size: 12px;
    font-weight: 600;
    padding-left: 15px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
