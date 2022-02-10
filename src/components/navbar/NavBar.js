import React from "react";
import "../navbar/NavBarStyles.css";
import {
  Header,
  HeaderMenu,
  HeaderMenuProfile,
  HeaderMenuProfileImg,
  Logo,
} from "./NavBarElements";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profileImg from "../../assets/images/user-icon.svg";

const NavBar = () => {
  return (
    <Header>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <HeaderMenu className="header__menu">
        <HeaderMenuProfile>
          <HeaderMenuProfileImg src={profileImg} />
        </HeaderMenuProfile>
        <ul>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/">Log In</Link>
          </li>
        </ul>
      </HeaderMenu>
    </Header>
  );
};

export default NavBar;
