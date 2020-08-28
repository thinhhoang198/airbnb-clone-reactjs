import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg"
          alt=""
        />
      </Link>

      <div className="header__searchBar">
        <input type="text" placeholder="Search..." />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ArrowDropDownIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
