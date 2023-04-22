import api from '../utils/api';

export async function buscarUsuarioPorEmail(email){
    try{
        const resposta = await api.post('/usuario/buscar-usuario', {email: email});
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}