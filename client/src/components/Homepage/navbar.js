import React from "react";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function HomepageNavbar() {
  // const history = useHistory();

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid" id="homepagenav">
          <a href="/,l" className="navbar-brand">
            WELCOME TO TODOS
          </a>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
        </div>
      </nav>
    </div>
  );
}
