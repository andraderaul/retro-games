import React from "react";
import { WrapperHeader } from "./Header.style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <WrapperHeader>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="about">
          <span>About</span>
        </Link>
        <Link to="help">
          <span>Help</span>
        </Link>
      </nav>
    </WrapperHeader>
  );
};

export default Header;
