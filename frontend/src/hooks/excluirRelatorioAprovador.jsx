import api from '../utils/api';

export async function excluirRelatorioAprovador(id){
    try{
        const resposta = await api.post(`/aprovador/relatorios/apagar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}