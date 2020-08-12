import { cursos } from "../data/cursos"



export const getCursosByNombre = (nombre) =>{

    return cursos.find(curso => curso.nombre === nombre)
}