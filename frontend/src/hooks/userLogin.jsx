import api from '../utils/api.jsx';

export default function usarLogin(){

    //função fazer login
    async function fazerLogin(email, senha){
        try{
            const dados = await api.post('/usuario/loginPost', { email, senha }).then((resposta) => {
                return resposta.dados
            });
            console.log(dados);
        }catch(erro){
            const msgErro = erro.resposta.dados.message;
            console.log(erro);
        }
    }
    return { fazerLogin };
}