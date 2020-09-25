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
          <Route exact path="/proyectos" component={Proyectos}>
            <Proyectos />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/cursos" component={CursosScreen}>
            <CursosScreen />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/contacto" component={ContactoScreen}>
            <ContactoScreen />
          </Route>
        </Switch>

        <Switch>
          <Route
            exact
            path="/cursos/:cursoNombre"
            component={CursoScreen}
          ></Route>
        </Switch>

        <Switch>
          <Route exact path="/" component={InicioScreen}>
            <InicioScreen />
          </Route>
        </Switch>

        <Footer showContact={showContact} />
      </Router>
    </div>
  );
};
