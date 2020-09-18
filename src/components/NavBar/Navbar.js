import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <div>
      <nav className="container navbar navbar-expand-lg navbar-light d-flex mt-3">
        <NavLink
          activeClassName="active"
          className="nav-item navbar-brand h1"
          exact
          to="/"
        >
          MV
        </NavLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          type="button"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleShow}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end h2 ${
            show ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav" onClick={handleShow}>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/cursos"
            >
              Cursos
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/proyectos"
            >
              Proyectos
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link nav-contacto"
              exact
              to="/contacto"
            >
              Contacto
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};
