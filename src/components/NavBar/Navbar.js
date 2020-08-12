import React from 'react'
import { NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="container navbar navbar-expand-lg navbar-light d-flex mt-3">
                <NavLink 
                        activeClassName="active"
                        className="nav-item navbar-brand h1" 
                        exact
                        to="/"
                    >
                        MV
                    </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-end h2" id="navbarNav">
                    <ul className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/cursos"
                    >
                        Cursos
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Algo"
                    >
                        Algo
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/contacto"
                        
                    >
                        Contacto
                    </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
