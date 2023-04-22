import api from '../utils/api';

export async function encontrarErros(dados){
    try{
        const resposta = await api.post('/aprovador/relatorios', {data: dados});
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}