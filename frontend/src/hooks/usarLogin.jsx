import api from '../utils/api';

export async function fazerLogin(email, senha){
    try{
        const dados = await api.post('/usuario/loginPost', {email: email, senha: senha});
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}