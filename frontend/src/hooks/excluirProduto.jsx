import api from '../utils/api';

export async function excluirProduto(id){
    try{
        const resposta = await api.post(`/administrador/produtos/deletar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}

