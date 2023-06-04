import api from '../utils/api';

export async function buscarContadores(){
    try{
        const resposta = await api.get('/administrador/contador');
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}