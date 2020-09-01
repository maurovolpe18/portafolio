import React from "react";
import { Link } from "react-router-dom";

export const Conoceme = () => {
  return (
    <div className="inicio__conoceme container">
      <h2 className="inicio__conoceme-title">Conóceme</h2>
      <div className="inicio__conoceme-items">
        <div className="inicio__conoceme-item">
          <h3 className="inicio__conoceme-item-title">Cursos</h3>
          <p className="inicio__conoceme-p">Cursos que he realizado</p>
          <Link to="/contacto" className="link">
            <button className="inicio__boton boton">Contacto</button>
          </Link>
        </div>
        <div className="inicio__conoceme-item">
          <h3 className="inicio__conoceme-item-title">Curriculum</h3>
          <p className="inicio__conoceme-p">Descarga mi curriculum</p>
          <button className="inicio__boton-curriculum boton">Curriculum</button>
        </div>
      </div>
    </div>
  );
};
