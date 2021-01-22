import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white">
        <NavLink className="navbar-brand" to="/">
          <b>01Synergy</b>
        </NavLink>
        <ul className="mt-4 ml-auto ">
            <p><b>Victory Insulators Limited</b></p>
            <p>HST: 12345 6789 RT0001</p>
        </ul>
      </nav>
    </>
  );
};
