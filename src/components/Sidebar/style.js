import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ isopen }) => (isopen ? "260px" : "78px")};
  background: ${({ theme }) => theme.colors.base};
  box-shadow: 1px 0 ${({ theme }) => theme.colors.mdColr};
  border-radius: 0px 10px 10px 0px;
  z-index: 100;
  transition: all 0.5s ease;

  /* NAVLINKS */

  .sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
  }
  .sidebar .nav-links li:hover {
    background: #1d1b31;
  }
  .sidebar .nav-links li .icon-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sidebar.close .nav-links li .icon-link {
    display: block;
  }
  .sidebar .nav-links li .icon {
    height: 20px;
    padding: 10px 0;
    min-width: 78px;
    color: #fff;
    cursor: pointer;
  }
  .sidebar .nav-links li .arrow {
    margin-right: 1.5em;
  }
  .sidebar .nav-links li.showMenu .arrow {
    transform: rotate(-180deg);
  }
  .sidebar.close .nav-links .arrow {
    display: none;
  }

  /* INPUT SEARCHBAR */
  .sidebar .nav-links .searchbox {
    display: flex;
    align-items: center;
  }
  .sidebar .nav-links .searchbox:hover .icon {
    background: #1d1b31;
  }
  .sidebar input {
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    color: #000;
    font-weight: 400;
    outline: none;
    height: 35px;
    width: 150px;
    border: none;
    border-radius: 12px;
    padding: 0 0 0 10px;
    transition: all 0.5s ease;
    background: #ffffff;
  }
  .sidebar.close input {
    background: #11101d;
    padding: 0 18px 0 60px;
    opacity: 0;
    transition: all 0s ease;
  }
  .sidebar .bx-search-alt {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 20px;
    color: #fff;
    transition: none;
    opacity: 1;
  }

  /* LINKS */
  .sidebar .nav-links li a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .sidebar .nav-links li a .link-name {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    transition: all 0.4s ease;
  }
  .sidebar.close .nav-links li a .link-name {
    opacity: 0;
    pointer-events: none;
  }
  .sidebar .nav-links li .sub-menu {
    padding: 6px 6px 14px 80px;
    margin-top: -10px;
    background: #1d1b31;
    display: none;
  }
  .sidebar .nav-links li.showMenu .sub-menu {
    display: block;
  }
  .sidebar .nav-links li .sub-menu a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  .sidebar .nav-links li .sub-menu a:hover {
    opacity: 1;
  }
  .sidebar.close .nav-links li .sub-menu {
    position: absolute;
    left: 100%;
    top: -10px;
    margin-top: 0;
    padding: 10px 20px;
    border-radius: 0 6px 6px 0;
    opacity: 0;
    display: block;
    pointer-events: none;
    transition: 0s;
  }
  .sidebar.close .nav-links li:hover .sub-menu {
    top: 0;
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
  }
  .sidebar .nav-links li .sub-menu .link-name {
    display: none;
  }
  .sidebar.close .nav-links li .sub-menu .link-name {
    font-size: 18px;
    opacity: 1;
    display: block;
  }
  .sidebar .nav-links li .sub-menu.blank {
    opacity: 1;
    pointer-events: auto;
    padding: 3px 20px 6px 16px;
    opacity: 0;
    pointer-events: none;
  }
  .sidebar .nav-links li:hover .sub-menu.blank {
    top: 50%;
    transform: translateY(-50%);
  }

  /* DETALHES PERFIL */
  .sidebar .profile-details {
    position: fixed;
    bottom: 0;
    width: 260px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1d1b31;
    padding: 12px 0;
    transition: all 0.5s ease;
  }
  .sidebar.close .profile-details {
    background: none;
  }
  .sidebar.close .profile-details {
    width: 78px;
  }
  .sidebar .profile-details .profile-content {
    display: flex;
    align-items: center;
  }
  .sidebar .profile-details img {
    height: 52px;
    width: 52px;
    object-fit: cover;
    border-radius: 16px;
    margin: 0 14px 0 12px;
    background: #1d1b31;
    transition: all 0.5s ease;
  }
  .sidebar.close .profile-details img {
    padding: 10px;
    height: 32px;
    width: 32px;
  }
  .sidebar .profile-details .profile-name,
  .sidebar .profile-details .tipouser {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
  }
  .sidebar .profile-details .icon {
    /* margin-right: 60px; */
  }
  .sidebar.close .profile-details .icon,
  .sidebar.close .profile-details .profile-name,
  .sidebar.close .profile-details .tipouser {
    display: none;
  }
  .sidebar .profile-details .tipouser {
    font-size: 12px;
  }

  /* RESPONSIVIDADE */
  @media (max-width: 420px) {
    .sidebar.close .nav-links li .sub-menu {
      display: none;
    }
  }
`;

/* LOGO DETAILS */
export const NavHeader = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-name {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    transition: 0.3s ease;
    transition-delay: ${({ isopen }) => (isopen ? "0.1s" : "0")};
    opacity: ${({ isopen }) => (isopen ? "1" : "0")};
  }
  .bx-menu {
    font-size: 25px;
    margin: 0 15px;
    cursor: pointer;
    transition: none;
    opacity: ${({ isopen }) => (isopen ? "1" : "0")};
  }
`;

export const Logo = styled.div`
  min-width: 78px;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bckg = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.mdColr};
  border-radius: 50%;
  img {
    height: 20px;
    width: 20px;
    line-height: 50px;
    cursor: ${({ isopen }) => (isopen ? "default" : "pointer")};
  }
`;

/* NAVLINKS */
export const NavLinks = styled.ul`
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/* FOOTER */
export const Footer = styled.div`
  height: 78px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px 8px 8px 0;
  background: ${({ theme }) => theme.colors.mdColr};
  h3 {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    opacity: ${({ isopen }) => (isopen ? "1" : "0")};
  }
`;

export const ThemeWrapper = styled.div`
  width: 100%s;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .react-icons {
    size: 20px;
    color: ${({ theme }) => theme.colors.text};
    padding: 0 10px;
  }
`;

/* SUB MENUS */
export const SidebarLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  height: 20px;
  font-size: 20px;
  padding: 10px 30px;
  transition: all 0.4s ease;
  background: ${({ theme }) => theme.colors.base};
  &:hover {
    background: ${({ theme }) => theme.colors.mdColr};
    box-shadow: 3px 0 inset ${({ theme }) => theme.colors.ascColr};
  }
  &:focus {
    background: ${({ theme }) => theme.colors.mdColr};
    box-shadow: 6px 0 inset ${({ theme }) => theme.colors.ascColr};
  }
  span {
    text-indent: 5px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 0 16px;
    line-height: 20px;
    transition: all 0.4s ease;
    opacity: ${({ isopen }) => (isopen ? "1" : "0")};
    pointer-events: ${({ isopen }) => (isopen ? "" : "none")};
  }
  .active {
    background: red;
    box-shadow: 6px 0 inset ${({ theme }) => theme.colors.ascColr};
  }
`;

export const Linkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Arrowbox = styled.div`
  display: flex;
  align-items: center;
  transition: ${({ isopen }) => (isopen ? "all 0.7s ease" : "0s")};
  opacity: ${({ isopen }) => (isopen ? "1" : "0")};
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 0 5px 50px;
  background: ${({ theme }) => theme.colors.lghColr};
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.4s ease;
  span {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 20px;
    transition: all 0.4s ease;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.ascColr};
  }
`;
