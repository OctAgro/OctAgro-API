import api from '../utils/api';

export async function excluirUsuario(id){
    try{
        const resposta = await api.delete(`/usuario/deletar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}