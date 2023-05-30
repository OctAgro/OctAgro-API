import api from '../utils/api';
import { pdf, Document, Page } from '@react-pdf/renderer';

export async function criarRelatorioFinal(id) {
    try {
        const relatorioFinal = await api.get(`/administrador/relatorio/gerar/${id}`, { responseType: 'arraybuffer' });
        const pdfData = new Uint8Array(relatorioFinal.data);
        return pdfData;

    } catch (erro) {
        const msgErro = erro;
        console.log(erro);
    }
}