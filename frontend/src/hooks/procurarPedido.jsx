import api from '../utils/api';

//  busca apenas um determinado Fornecedor por Id
export async function procurarPedido(id){
    try{
        const resposta = await api.get(`/administrador/pedidos/listarporID/${id}`);
        return resposta.data.mensagem;
    } catch(erro){
        console.log(erro);
    }
}