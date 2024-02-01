import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/aboutUs"}>About</Link> */}

      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/aboutUs"}>About</NavLink>
    </nav>
  );
}

export default Navbar;
