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
                >
                  Visitar Sitio
                </a>
                <a
                  className="trabajos__boton-git btn btn-primary"
                  href={trabajo.git}
                >
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
