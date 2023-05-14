import api from '../utils/api';

export async function excluirRelatorioRecebedor(id){
    try{
        const resposta = await api.post(`/recebedor/relatorios/apagar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}