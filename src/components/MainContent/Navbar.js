import React from "react";
import { IconContext } from "react-icons";
import userImg from "../../assets/funcionaria.png";
import { RiSearchEyeLine } from "react-icons/ri";
import { BiCog, BiLogOut } from "react-icons/bi";
import { NavBar, SearchWrap, UserBox, ImgBox } from "./style";

const Navbar = () => (
  <IconContext.Provider
    value={{
      className: "react-icons",
      color: "#ED3C40",
      size: "20px",
      style: { padding: "0 10px" },
    }}
  >
    <NavBar className="navbar">
      <SearchWrap className="search">
        <RiSearchEyeLine />
        <input type="text" placeholder="Pesquisa..." />
      </SearchWrap>
      <UserBox className="userbox">
        <div>
          <h3>Cliente com nome grandeeeeeee</h3>
          <h6>Tipo usuario textando caractere</h6>
        </div>
        <ImgBox>
          <img src={userImg} alt="avatar" />
        </ImgBox>
        <BiCog />
        <BiLogOut />
      </UserBox>
    </NavBar>
  </IconContext.Provider>
);

export default Navbar;
