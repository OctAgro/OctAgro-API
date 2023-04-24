import api from '../utils/api';

export async function buscarRelatoriosPorId(){
    try{
        const resposta = await api.post('/aprovador/relatorios/:id');
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}