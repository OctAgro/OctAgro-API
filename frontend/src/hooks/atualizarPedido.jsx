import api from '../utils/api';

export async function atualizarPedido(id, data){
    try{
        const resposta = await api.post(`/administrador/pedidos/atualizar/${id}`, data);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}

