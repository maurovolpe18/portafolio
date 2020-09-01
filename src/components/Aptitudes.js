import React from "react";

export const Aptitudes = () => {
  return (
    <div className="inicio__caja-aptitudes container-caja">
      <h2 className="inicio__aptitudes-title">Servicios</h2>
      <div className="inicio__aptitudes">
        <div className="inicio__aptitud">
          <h2 className="inicio__aptitud-title">Diseño web y movil</h2>
          <div className="inicio__iconos">
            <i className="fas fa-mobile-alt"></i>
          </div>

          <p className="inicio__aptitud-info">
            Con la última tecnología y responsive design que se adaptan a todas
            las plataformas, logramos una Sitio Web multiplataforma...
          </p>
        </div>

        <div className="inicio__aptitud">
          <h2 className="inicio__aptitud-title">Programador Web</h2>
          <div className="inicio__iconos">
            <i className="fas fa-laptop-code"></i>
          </div>

          <p className="inicio__aptitud-info">
            Programación HTML, XHTML, XML, CSS, Javascript, VBScript, ASP, PHP.
            Bases de Datos...
          </p>
        </div>

        <div className="inicio__aptitud">
          <h3 className="inicio__aptitud-title">Todavia no se</h3>
          <div className="inicio__iconos">
            <i className="fas fa-mobile-alt"></i>
          </div>

          <p className="inicio__aptitud-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            commodi officia illo quam nostrum totam, quod suscipit unde expedita
            iste itaque ex vero, pariatur dolor maxime veritatis molestiae.
            Earum, sunt?
          </p>
        </div>
      </div>
    </div>
  );
};
