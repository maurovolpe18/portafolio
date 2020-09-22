import React from "react";
import { Link } from "react-router-dom";

export const Conoceme = () => {
  return (
    <div className="inicio__conoceme container">
      <h2 className="inicio__conoceme-title">Conóceme</h2>
      <div className="inicio__conoceme-items">
        <div className="inicio__conoceme-item">
          <h3 className="inicio__conoceme-item-title">
            ¡Echa un vistazo a mis certificados!
          </h3>
          <Link to="/cursos" className="link">
            <button className="inicio__boton boton">Certificados</button>
          </Link>
        </div>
        <div className="inicio__conoceme-item">
          <h3 className="inicio__conoceme-item-title">
            ¿Quiéres conocerme un poco más?
          </h3>
          <button className="inicio__boton-curriculum boton">Curriculum</button>
        </div>
      </div>
    </div>
  );
};
