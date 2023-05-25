import api from '../utils/api';

export async function atualizarUsuario(id, data){
    try{
        const resposta = await api.put(`/usuario/atualizarUsuarioPost/${id}`, data);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}