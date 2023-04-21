import api from '../utils/api';

export async function fazerLogin(email, senha){
    try{
        const dados = await api.post('/aprovador/home');
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}