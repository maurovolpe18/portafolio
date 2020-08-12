import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Navbar } from '../NavBar/Navbar';
import { CursosScreen } from '../pages/CursosScreen';
import { ContactoScreen } from '../pages/ContactoScreen';
import { InicioScreen } from '../pages/InicioScreen';
import { Footer } from '../Footer';
import { CursoScreen } from '../pages/CursoScreen';



export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Navbar />
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
                    <Route exact path="/cursos/:cursoNombre" component={CursoScreen}>
                        
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/" component={InicioScreen}>
                        <InicioScreen />
                    </Route>
                </Switch>
                
                <Footer />
            </Router>
        </div>
    )
}
