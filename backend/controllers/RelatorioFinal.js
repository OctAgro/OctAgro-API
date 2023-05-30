const Fornecedor = require('../models/Fornecedor')
const RelatorioAprovador = require('../models/RelatorioAprovador')
const RelatorioRecebedor = require('../models/RelatorioRecebedor')
const RelatorioAnalista = require('../models/RelatorioAnalista')
const Produto = require('../models/Produto')
const CriteriosAvaliacao = require('../models/CriteriosAvaliacao')
const Usuario = require('../models/Usuario')
const Pedido = require('../models/Pedido')

const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = class RelatorioFinalController {

    // Função para criar o relatório final em PDF
    static async gerarRelatorioFinal(req, res) {
        const id_pedido = req.params.id;

        try {
            const relatorioRecebedor = await RelatorioRecebedor.findOne({
                where: { id_pedido },
                include: [
                    {
                        model: Usuario,
                        as: 'usuario',
                    },
                ],
            });

            const pedido = await Pedido.findOne({
                where: { id_pedido },
                include: [
                    {
                        model: Fornecedor,
                        as: 'fornecedor',
                    },
                ],
            });

            const relatorioAnalista = await RelatorioAnalista.findOne({
                where: { id_pedido },
                include: [
                    {
                        model: Usuario,
                        as: 'usuario',
                    },
                ],
            });

            const relatorioAprovador = await RelatorioAprovador.findOne({
                where: { id_pedido },
                include: [
                    {
                        model: Usuario,
                        as: 'usuario',
                    },
                ],
            });

            const doc = new PDFDocument();
            const nomeArquivo = `Relatorio_Final_${id_pedido}.pdf`;
            const stream = fs.createWriteStream(nomeArquivo);
            doc.pipe(stream);

            doc.rect(0, 0, doc.page.width, doc.page.height).fill('#F7F1E5');

            const logoPath = 'public/sidebarOctagro.png';
            const logoBuffer = fs.readFileSync(logoPath);

            doc.image(logoBuffer, { fit: [200, 200], align: 'center', valign: 'top' }).strokeColor('black');

            doc.fillColor('black').fontSize(18).text(`Relatório do Pedido Nº ${id_pedido}`, { align: 'center' });
            doc.fontSize(14).text(`Empresa ${pedido.fornecedor.nome_fornecedor}`, { align: 'center' });
            doc.fontSize(12).text(`Data do Relatório: ${new Date().toLocaleDateString()}`, { align: 'right' });

            doc.fontSize(14).text('Recebedor', { underline: true });
            doc.text(`Nome: ${relatorioRecebedor.usuario.nome}`);
            doc.text(`Status de Aprovação: ${relatorioRecebedor.status_aprovacao}`);
            doc.text(`Critérios de Aceitação:`);
            doc.text(`- Coloração: ${relatorioRecebedor.coloracao ? 'Aprovado' : 'Rejeitado'}`);
            doc.text(`- Odor: ${relatorioRecebedor ? 'Aprovado' : 'Rejeitado'}`);
            doc.text(`- Ausência de Animais: ${relatorioRecebedor.ausencia_animais ? 'Aprovado' : 'Rejeitado'}`);
            doc.text(`- Ausência de Mofo: ${relatorioRecebedor.ausencia_mofo ? 'Aprovado' : 'Rejeitado'}`);

            doc.moveDown();

            doc.fontSize(14).text('Analista', { underline: true });
            doc.text(`Nome: ${relatorioAnalista.usuario.nome}`);
            doc.text(`Status de Aprovação: ${relatorioAnalista.status_aprovacao}`);
            doc.text(`Critérios de Aceitação:`);
            doc.text(`- Qualidade do Grão: ${relatorioAnalista.qualidade_grao ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Formato do Grão: ${relatorioAnalista.formato_grao ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Nível de Agrotóxicos: ${relatorioAnalista.nivel_agrotoxicos ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Limpeza dos Grãos: ${relatorioAnalista.limpeza_graos ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Status do Documento: ${relatorioAnalista.doc_status ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Status do Recebedor: ${relatorioAnalista.info_recebedor_status ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Comentário do Analista: ${relatorioAnalista.analista_comentario}`);

            doc.moveDown();

            doc.fontSize(14).text('Aprovador', { underline: true });
            doc.text(`Nome: ${relatorioAprovador.usuario.nome}`);
            doc.text(`Status de Aprovação: ${relatorioAprovador.status_aprovacao}`);
            doc.text(`Critérios de Aceitação:`);
            doc.text(`- Status do Documento: ${relatorioAprovador.doc_status ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Status do Recebedor: ${relatorioAprovador.info_recebedor_status ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Status do Analista: ${relatorioAprovador.info_analista_status ? 'Verdadeiro' : 'Falso'}`);
            doc.text(`- Revisão do Aprovador: ${relatorioAprovador.revisao_aprovador}`);
            doc.text(`- Status Final de Aprovação: ${relatorioAprovador.status_final_aprovacao}`);

            const buffers = [];
            doc.on('data', (buffer) => buffers.push(buffer));
            doc.on('end', () => {
                const pdfData = Buffer.concat(buffers);
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `inline; filename=relatorio_pedido_${id_pedido}.pdf`);
                res.send(pdfData).status(200);
            });

            doc.end();

        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}