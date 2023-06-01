import api from '../utils/api';

export async function encontrarCriterios() {
    try {
        const criterio = await api.get(`/administrador/criterio/listar`) 
        console.log(criterio)
        return criterio.data
    } catch (erro) { 
        console.log(erro) 
    }
}