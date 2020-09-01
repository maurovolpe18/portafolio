import React from "react";
import { NavLink } from "react-router-dom";

export const Toggle = () => {
  return (
    <div>
      <div
        className="collapse navbar-collapse justify-content-end h2"
        id="navbarNav"
      >
        <ul className="navbar-nav">
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
            className="nav-item nav-link"
            exact
            to="/contacto"
          >
            Contacto
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
