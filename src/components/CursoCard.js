import React from "react";

export const CursoCard = ({ id, nombre, img, descripcion }) => {
  return (
    <>
      <div className="cursos__card">
        <div className="cursos__info">
          <div className="curso__title">{nombre}</div>
          {/*<Link to={`./cursos/${nombre}`}>*/}
          <img src={img} alt="curso" className="curso__imagen" />
          {/*</Link>*/}

          <div className="curso__descripcion">
            <a href={descripcion}>Ir al sitio web del curso</a>
          </div>
        </div>
      </div>
    </>
  );
};
