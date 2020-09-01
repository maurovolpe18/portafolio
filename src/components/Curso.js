import React from "react";

export const getCursoByImg = ({ id }) => {
  const cursos = getCursoByImg(id);

  return (
    <>
      <ul>
        {cursos.map((curso) => (
          <li>{curso.id}</li>
        ))}
      </ul>
    </>
  );
};
