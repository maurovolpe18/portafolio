import React from "react";
import { Link } from "react-router-dom";

export const CurriculumCaja = () => {
  return (
    <div className="footer__contactame container-caja">
      <div className="footer__contactame-items container">
        <h2 className="footer__contactame-title">Curriculum</h2>
        <p className="footer__contactame-info">
          Puedes ver mi curriculum haciendo click acá
        </p>
        <Link to="/contacto" className="footer__boton-contactame boton link ">
          Curriculum
        </Link>
      </div>
    </div>
  );
};
