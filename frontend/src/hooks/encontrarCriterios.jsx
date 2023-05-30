import api from '../utils/api';

export async function encontrarCriteriosById(id) {
    try {
        const criterio = await api.get(`/criterio/listarById/${id}`) 
        console.log(criterio)
        return criterio.data
    } catch (erro) { 
        console.log(erro) 
    }
}