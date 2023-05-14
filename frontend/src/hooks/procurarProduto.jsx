import api from '../utils/api';

//  busca apenas um determinado Produto por Id
export async function procurarProduto(id){
    try{
        const resposta = await api.post(`/administrador/produtos/procurar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}

//  busca todos os Produtos
export async function buscarProduto(){
    try{
        const resposta = await api.get('/administrador/produtos/home');
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}

