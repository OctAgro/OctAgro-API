import api from '../utils/api';

export async function excluirRelatorioAnalista(id){
    try{
        const resposta = await api.post(`/analista/relatorios/apagar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}