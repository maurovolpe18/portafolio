import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CursosScreen } from './CursosScreen'
import { getCursosByNombre } from '../../selector/getCursoByNombre'

export const CursoScreen = () => {
    const {cursoNombre} = useParams()
    
    const curso = getCursosByNombre(cursoNombre)

    const {
        id,
        nombre,
        img,
        descripcion
    
    } = curso

    console.log(curso)

    return (
        <div className="certificado__contenedor container">
            <img src={img} alt={nombre} className="certificado__imagen"/>
            <p className="certificado__info">{descripcion}</p>
            
        </div>
    )
}
