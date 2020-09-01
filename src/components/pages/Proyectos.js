import React from "react";
import { trabajos } from "../../data/trabajos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Proyectos = () => {
  return (
    <div className="container">
      <h1 className="trabajos__titulo">Proyectos</h1>
      <div className="trabajos__contenedor">
        {trabajos.map((trabajo) => (
          <a href={trabajo.direccion} className="trabajos__card">
            <img
              src={trabajo.img}
              alt={trabajo.nombre}
              className="trabajos__imagen"
            />
            <p className="trabajos__nombre">{trabajo.nombre}</p>
            <a href={trabajo.direccion} className="trabajos__web">
              {trabajo.direccion}
            </a>
            <a className="trabajos__link" href={trabajo.git}>
              <FontAwesomeIcon className="trabajos__git" icon={faGithub} />
            </a>
          </a>
        ))}
      </div>
    </div>
  );
};
