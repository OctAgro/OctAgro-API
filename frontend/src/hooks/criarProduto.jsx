import api from '../utils/api';

export async function criarProduto(data){
    try{
        const dados = await api.post('/administrador/produtos/cadastrar', {data: data});
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}