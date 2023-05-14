import api from '../utils/api';

export async function updateRelatoriosRecebedor(id, data){
    try{
        const resposta = await api.post(`/recebedor/relatorios/editar/${id}`, {data});
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}