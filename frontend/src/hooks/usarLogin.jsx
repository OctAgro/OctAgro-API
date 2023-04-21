import api from '../utils/api';

export async function fazerLogin(email, senha){
    try{
        const dados = await api.post('/usuario/loginPost', { email: email, senha: senha }).then((resposta) => {
            return resposta.data
        });
        console.log(dados);
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}