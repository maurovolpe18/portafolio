import React from "react";
import { ContactameCaja } from "./ContactameCaja";
import { CurriculumCaja } from "./CurriculumCaja";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <div className="footer__items d-flex flex-nowrap flex-column">
        {location.pathname !== "/contacto" ? (
          <ContactameCaja />
        ) : (
          <CurriculumCaja />
        )}
        <div className="footer__linea">
          <div className="container">
            <p className="footer__title">Desarrollador Front End</p>
            <div className="footer__redes">
              <div className="footer__red">
                <a
                  className="footer__link-red"
                  href="https://www.linkedin.com/in/maurizio-volpe-b87aa1168/"
                >
                  <FontAwesomeIcon
                    className="footer__linkedin"
                    icon={faLinkedinIn}
                  />
                </a>
              </div>
              <div className="footer__red">
                <a
                  className="footer__link-red"
                  href="https://github.com/maurovolpe18"
                >
                  <FontAwesomeIcon className="footer__git" icon={faGithub} />
                </a>
              </div>
              <div className="footer__red">
                <a
                  className="footer__link-red"
                  href="mailto:maurovolpe18@gmail.com"
                >
                  <FontAwesomeIcon className="footer__mail" icon={faEnvelope} />
                </a>
              </div>
            </div>
            <p className="footer__copy">
              Portafolio creado por Maurizio Volpe - &copy; 2020
            </p>
            <p className="footer__copy">
              Hecho con{" "}
              <FontAwesomeIcon className="footer__react" icon={faReact} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
