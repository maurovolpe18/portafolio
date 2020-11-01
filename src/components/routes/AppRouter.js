import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../NavBar/Navbar";
import { CursosScreen } from "../pages/CursosScreen";
import { ContactoScreen } from "../pages/ContactoScreen";
import { InicioScreen } from "../pages/InicioScreen";
import { Footer } from "../Footer";
import { CursoScreen } from "../pages/CursoScreen";
import { Proyectos } from "../pages/Proyectos";
import ScrollToTop from "react-scroll-to-top";
import { NotFound } from "../NotFound";

export const AppRouter = () => {
  const showContact = true;
  return (
    <div>
      <ScrollToTop
        smooth
        style={{
          background: "white",
          borderRadius: "3rem",
          color: "black",
        }}
      />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/proyectos" component={Proyectos} />

          <Route exact path="/cursos" component={CursosScreen} />

          <Route exact path="/contacto" component={ContactoScreen} />

          <Route exact path="/cursos/:cursoNombre" component={CursoScreen} />

          <Route exact path="/" component={InicioScreen} />
          <Route component={NotFound} />
        </Switch>

        <Footer showContact={showContact} />
      </Router>
    </div>
  );
};
