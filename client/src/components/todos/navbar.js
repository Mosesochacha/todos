import React from "react";
import { NavLink } from "react-router-dom";


export default function  Navbar (){
  return(
    <div>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <NavLink to="/home">
      Home
    </NavLink>
   <NavLink to="add">
    Add TODOS
   </NavLink>
  </div>
</nav>
    </div>
  )
}