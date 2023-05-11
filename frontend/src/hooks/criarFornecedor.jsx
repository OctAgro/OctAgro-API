import api from '../utils/api';

export async function criarFornecedor(data){
    try{
        const dados = await api.post('/fornecedor/cadastrar', {data: data});
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}