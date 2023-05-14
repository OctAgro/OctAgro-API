import api from '../utils/api';

export async function excluirFornecedor(id){
    try{
        const resposta = await api.post(`/administrador/fornecedor/deletar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}
