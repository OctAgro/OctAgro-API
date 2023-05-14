import api from '../utils/api';

export async function excluirPedido(id){
    try{
        const resposta = await api.post(`/administrador/pedidos/deletar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}