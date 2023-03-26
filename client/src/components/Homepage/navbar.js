import React from "react";

export default function HomepageNavbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid " id="homepagenav">
          <a href="l" className="navbar-brand">
            WELCOME TO TODOS
          </a>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            LOGIN
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            REGISTER
          </button>
        </div>
      </nav>
    </div>
  );
}
