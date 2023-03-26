import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="add">Add TODOS</NavLink>
        </div>
      </nav>
    </div>
  );
}
