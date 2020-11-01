import React from "react";
import { ScrollTop } from "../accion/ScrollTop";
import { useForm } from "../../hooks/useForm";
import mail from "../../img/mail.svg";
export const ContactoScreen = () => {
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    email: "",
    texto: "",
  });

  const { nombre, email, texto } = formValues;

  return (
    <>
      <ScrollTop />
      <div className="container">
        <h1 className="contacto__title">Contacto</h1>
        <div className="contacto__container">
          <img src={mail} alt={mail} className="contacto__imagen" />
          <form
            action="correo.php"
            method="POST"
            className="contacto__formulario container"
          >
            <div className="contacto__info">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                className="contacto__persona"
                value={nombre}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="contacto__email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
            <textarea
              className="contacto__mensaje"
              name="texto"
              value={texto}
              onChange={handleInputChange}
              placeholder="Mensaje"
              required
            ></textarea>

            <button type="submit" className="boton contacto__boton-formulario">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
