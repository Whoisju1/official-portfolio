import React from "react";
import Nav from "./Nav";
export const Header = props => {
  return (
    <div className="header-wrapper">
      <header>
        <div className="logo">Juan</div>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
