import api from '../utils/api';

export async function atualizarProduto(id, data){
    try{
        const resposta = await api.post(`/administrador/produtos/atualizar/${id}`, data);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}

