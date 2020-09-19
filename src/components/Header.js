import React from "react";
import Typewriter from "typewriter-effect";
import programador from "../img/programador.svg";

export const Header = (toggle) => {
  return (
    <>
      <div>
        <div className="inicio__logo container">
          <h1 className="inicio__texto">
            <Typewriter
              className="inicio__type"
              options={{
                strings: ["< Maurizio Volpe />"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <img className="inicio__pc" src={programador} alt="algo" />
      </div>
    </>
  );
};
