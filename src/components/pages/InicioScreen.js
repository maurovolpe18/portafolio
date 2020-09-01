import React from "react";
import { Header } from "../Header";
import { Info } from "../Info";
import { Aptitudes } from "../Aptitudes";
import { Conoceme } from "../Conocome";

export const InicioScreen = () => {
  return (
    <div className="fadeIn">
      <Header />
      <Info />
      <Aptitudes />
      <Conoceme />
    </div>
  );
};
