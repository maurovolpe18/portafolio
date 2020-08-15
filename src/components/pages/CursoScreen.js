import React from 'react'
import { useParams } from 'react-router-dom'
import { getCursosByNombre } from '../../selector/getCursoByNombre'

export const CursoScreen = () => {
    const {cursoNombre} = useParams()
    
    const curso = getCursosByNombre(cursoNombre)

    const {
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
