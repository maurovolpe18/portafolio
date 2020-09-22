import React from "react";

export const Aptitudes = () => {
  return (
    <div className="inicio__caja-aptitudes container-caja">
      <h2 className="inicio__aptitudes-title">Servicios</h2>
      <div className="inicio__aptitudes">
        <div className="inicio__aptitud">
          <h2 className="inicio__aptitud-title">Diseño web y móvil</h2>
          <div className="inicio__iconos">
            <i className="fas fa-mobile-alt"></i>
          </div>

          <p className="inicio__aptitud-info">
            Realizo diseños exclusivos según la necesidad de cada cliente y su
            identidad corporativa, ¡tomando en cuenta la experiencia de usuario!
          </p>
        </div>

        <div className="inicio__aptitud">
          <h2 className="inicio__aptitud-title">Programador Web</h2>
          <div className="inicio__iconos">
            <i className="fas fa-laptop-code"></i>
          </div>

          <p className="inicio__aptitud-info">
            Programación HTML, CSS, SASS, Javascript, React js
          </p>
        </div>
      </div>
    </div>
  );
};
