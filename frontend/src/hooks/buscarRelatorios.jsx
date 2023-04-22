import api from '../utils/api';

export async function buscarRelatorios(){
    try{
        const resposta = await api.post('/aprovador/home');
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}