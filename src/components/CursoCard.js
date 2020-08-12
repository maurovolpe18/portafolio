import React from 'react'
import { Link } from 'react-router-dom'

export const CursoCard = ({
    id,
    nombre,
    img,
    descripcion

}) => {
    return (
        <>
        <div className="cursos__card">
            <div className="cursos__info">
                <div className="curso__title">
                    {nombre}
                </div>
                <Link to={`./cursos/${nombre}`}>
                    <img src={img} alt="curso" className="curso__imagen"/>
                </Link>
                
                <div className="curso__descripcion">
                    <p>{descripcion}</p>
                </div>
                
            </div>
         </div>
        </>  

        
    )
}
