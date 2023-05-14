import api from "../utils/api";

export async function buscarCriteriosRecebedorPorId(id){
    try{
        const resposta = await api.get(`/recebedor/relatorios/criterios/${id}`);
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}

export async function buscarCriteriosAnalistaPorId(id){
    try{
        const resposta = await api.get(`/analista/relatorios/criterios/${id}`);
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}

export async function buscarCriteriosAprovadorPorId(id){
    try{
        const resposta = await api.get(`/aprovador/relatorios/criterios/${id}`);
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}
