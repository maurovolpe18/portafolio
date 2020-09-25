import React from "react";
import Curriculum from "../img/Curriculum.pdf";

export const CurriculumCaja = () => {
  return (
    <div className="footer__contactame container-caja">
      <div className="footer__contactame-items container">
        <h2 className="footer__contactame-title">Curriculum</h2>
        <p className="footer__contactame-info">
          Puedes ver mi curriculum haciendo click acá
        </p>
        <button className="footer__boton-contactame boton link ">
          <a
            href={Curriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="curriculum__link-contacto"
          >
            Curriculum
          </a>
        </button>
      </div>
    </div>
  );
};
