import api from "../utils/api";

export async function encontrarCriteriosByPedidoId(id){
    try{
        const resposta = await api.get(`/administrador/criterio/listarById/${id}`);
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}