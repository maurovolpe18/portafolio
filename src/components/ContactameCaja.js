import React from "react";
import { Link } from "react-router-dom";

export const ContactameCaja = () => {
  return (
    <div className="footer__contactame container-caja">
      <div className="footer__contactame-items container">
        <h2 className="footer__contactame-title">Contáctame</h2>
        <p className="footer__contactame-info">
          ¿Estás interesado en trabajar juntos?
        </p>

        <Link to="/contacto" className="footer__boton-contactame boton link ">
          ¡Contáctame!
        </Link>
      </div>
    </div>
  );
};
