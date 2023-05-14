import api from '../utils/api';

export async function atualizarFornecedor(id, data){
    try{
        const resposta = await api.post(`/administrador/fornecedor/atualizar/${id}`, data);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}