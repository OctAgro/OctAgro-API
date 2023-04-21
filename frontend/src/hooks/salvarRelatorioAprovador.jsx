import api from '../utils/api';

export async function salvarRelatorio(){
    try{
        const dados = await api.post('/aprovador/relatorios', {});
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}