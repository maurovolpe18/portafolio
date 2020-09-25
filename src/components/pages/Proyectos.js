import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { trabajos } from "../../data/trabajos";

export const Proyectos = () => {
  return (
    <div className="container">
      <h1 className="trabajos__titulo">Proyectos</h1>
      <div className="trabajos__contenedor">
        {trabajos.map((trabajo) => (
          <div className="trabajos__card">
            <img
              src={trabajo.img}
              alt={trabajo.nombre}
              className="trabajos__imagen"
            />
            <div className="trabajos__info">
              <p className="trabajos__nombre">{trabajo.nombre}</p>
              <p className="trabajos__descripcion">{trabajo.descripcion}</p>
              <div className="trabajos__botones">
                <a
                  className="trabajos__boton-link btn btn-primary"
                  href={trabajo.direccion}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="footer__git"
                    icon={faExternalLinkAlt}
                  />{" "}
                  Visitar Sitio
                </a>
                <a
                  className="trabajos__boton-git btn btn-primary"
                  href={trabajo.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="footer__git" icon={faGithub} />{" "}
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
