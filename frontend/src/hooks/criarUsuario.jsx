import api from '../utils/api';

export async function criarUsuario(data){
    try{
        console.log('No hook', data)
        const dados = await api.post('/administrador/usuarios/cadastrar', {data: data});
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}