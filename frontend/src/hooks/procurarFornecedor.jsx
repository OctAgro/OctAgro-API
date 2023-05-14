import api from '../utils/api';

//  busca apenas um determinado Fornecedor por Id
export async function procurarFornecedor(id){
    try{
        const resposta = await api.get(`/administrador/fornecedor/encontrar/${id}`);
        return resposta.data.message;
    } catch(erro){
        console.log(erro);
    }
}