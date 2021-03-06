import React from "react";
import { ScrollTop } from "../accion/ScrollTop";
import { cursos } from "../../data/cursos";
import { CursoCard } from "../CursoCard";

export const CursosScreen = () => {
  return (
    <>
      <ScrollTop />
      <div className="curso__seccion">
        <h1 className="cursos__title">Cursos Realizados</h1>
        <div className="cursos__contenedor">
          {cursos.map((curso) => (
            <CursoCard key={curso.id} {...curso} />
          ))}
        </div>
      </div>
    </>
  );
};
