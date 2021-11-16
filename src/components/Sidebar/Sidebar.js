import React, { useState, useEffect } from "react";
import _ from "lodash";

import logoB from "../../assets/cleverlogoB.svg";
import { IconContext } from "react-icons";
import { HiMenu, HiOutlineSun } from "react-icons/hi";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

import { SidebarData } from "./Data/SidebarData";
import SubMenu from "./SubMenu";
import { useTheme } from "../../theme/useTheme";
import { getFromLS } from "../../utils/storage";

import {
  SidebarNav,
  NavHeader,
  Logo,
  Bckg,
  NavLinks,
  Footer,
  ThemeWrapper,
} from "./style.js";

const Sidebar = (props) => {
  //const sideBarFromLS = getFromLS(isopen);

  const [isopen, setIsopen] = useState(true);
  const showSidebar = () => setIsopen(!isopen);
  let openSideb = isopen;
  //let url = "";

  useEffect(() => {
    localStorage.setItem("sidebarOpen", isopen);
    console.log(localStorage);
  }, [isopen]);

  // Use to change theme with day and night switch
  /* const themeFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themeFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
    console.log(selectedTheme);
    setMode(selectedTheme);
    props.setter(selectedTheme);
  }; */

  return (
    <IconContext.Provider
      value={{
        color: "#ED3C40",
        className: "react-icons",
        size: "20px",
      }}
    >
      <SidebarNav isopen={isopen} className="sidebar">
        <NavHeader isopen={isopen} className="navheader">
          {isopen ? (
            <Logo className="Logo">
              <Bckg>
                <img src={logoB} alt="" />
              </Bckg>
            </Logo>
          ) : (
            <Logo className="Logo">
              <Bckg>
                <img src={logoB} alt="" onClick={showSidebar} />
              </Bckg>
            </Logo>
          )}
          <span className="logo-name">CleverSystems</span>
          <HiMenu className="bx-menu" onClick={showSidebar} />
        </NavHeader>
        <NavLinks className="NavLink">
          {SidebarData.map((item, index) => {
            return <SubMenu entrada={item} key={index} isopen={openSideb} />;
          })}
        </NavLinks>
        <Footer isopen={isopen} className="footer">
          {isopen ? <h3>Escolha um tema</h3> : null}
          <ThemeWrapper>
            <IconContext.Provider
              value={{
                className: "react-icons",
              }}
            >
              <HiOutlineSun />
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                className: "react-icons",
              }}
            >
              <IoMdMoon />
            </IconContext.Provider>
          </ThemeWrapper>
        </Footer>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
