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

            const criteriosAdicionais = await CriteriosAvaliacao.findAll({
                where: { id_pedido }
            });

            console.log(criteriosAdicionais);

            const doc = new PDFDocument();
            const nomeArquivo = `Relatorio_Final_${id_pedido}.pdf`;
            const stream = fs.createWriteStream(nomeArquivo);
            doc.pipe(stream);

            doc.rect(0, 0, doc.page.width, doc.page.height).fill('#FFFFFF');

            const logoPath = 'public/OCTAGRO_stroke.png';
            const logoBuffer = fs.readFileSync(logoPath);

            doc.image(logoBuffer, { fit: [200, 200], align: 'center', valign: 'top' }).strokeColor('black');

            doc.fillColor('black').fontSize(18).text(`Relatório do Pedido Nº ${id_pedido}`, { align: 'center' });
            doc.fontSize(14).text(`Empresa ${pedido.fornecedor.nome_fornecedor}`, { align: 'center' });
            doc.fontSize(12).text(`Data do Relatório: ${new Date().toLocaleDateString()}`, { align: 'right' });

            doc.fontSize(14).text('Recebedor', { underline: true });
            doc.text(`Nome: ${relatorioRecebedor.usuario.nome}`);
            doc.text(`Status de Aprovação: ${relatorioRecebedor.status_aprovacao}`);
            doc.text(`Critérios de Aceitação:`);
            doc.text('- Coloração: ', { continued: true });
            doc.fillColor(relatorioRecebedor.coloracao ? 'green' : 'red').text(relatorioRecebedor.coloracao ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Odor: `, { continued: true });
            doc.fillColor(relatorioRecebedor.odor ? 'green' : 'red').text(relatorioRecebedor.odor ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Ausência de Animais: `, { continued: true });
            doc.fillColor(relatorioRecebedor.ausencia_animais ? 'green' : 'red').text(relatorioRecebedor.ausencia_animais ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Ausência de Mofo: `, { continued: true });
            doc.fillColor(relatorioRecebedor.ausencia_mofo ? 'green' : 'red').text(relatorioRecebedor.ausencia_mofo ? 'Aprovado' : 'Rejeitado');
            criteriosAdicionais.forEach((criterio) => {
                if (criterio.funcao === 'Recebedor') {
                    doc.fillColor('black').text(`- ${criterio.descricao_regra}: `, { continued: true });
                    doc.fillColor(criterio.status_checkbox ? 'green' : 'red').text(criterio.status_checkbox ? 'Aprovado' : 'Rejeitado');
                }
            });

            doc.moveDown();

            doc.fillColor('black').fontSize(14).text('Analista', { underline: true });
            doc.text(`Nome: ${relatorioAnalista.usuario.nome}`);
            doc.text(`Status de Aprovação: ${relatorioAnalista.status_aprovacao}`);
            doc.text(`Critérios de Aceitação:`);
            doc.fillColor('black').text(`- Qualidade do Grão: `, { continued: true });
            doc.fillColor(relatorioAnalista.qualidade_grao ? 'green' : 'red').text(relatorioAnalista.qualidade_grao ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Formato do Grão: `, { continued: true });
            doc.fillColor(relatorioAnalista.formato_grao ? 'green' : 'red').text(relatorioAnalista.formato_grao ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Nível de Agrotóxicos: `, { continued: true });
            doc.fillColor(relatorioAnalista.nivel_agrotoxicos ? 'green' : 'red').text(relatorioAnalista.nivel_agrotoxicos ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Limpeza dos Grãos: `, { continued: true });
            doc.fillColor(relatorioAnalista.limpeza_graos ? 'green' : 'red').text(relatorioAnalista.limpeza_graos ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Status do Documento: `, { continued: true });
            doc.fillColor(relatorioAnalista.doc_status ? 'green' : 'red').text(relatorioAnalista.doc_status ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Status do Recebedor: `, { continued: true });
            doc.fillColor(relatorioAnalista.info_recebedor_status ? 'green' : 'red').text(relatorioAnalista.info_recebedor_status ? 'Aprovado' : 'Rejeitado');

            criteriosAdicionais.forEach((criterio) => {
                if (criterio.funcao === 'Analista') {
                    doc.fillColor('black').text(`- ${criterio.descricao_regra}: `, { continued: true });
                    doc.fillColor(criterio.status_checkbox ? 'green' : 'red').text(criterio.status_checkbox ? 'Aprovado' : 'Rejeitado');
                }
            });

            doc.fillColor('black').text(`- Comentário do Analista: "${relatorioAnalista.analista_comentario}"`);

            doc.moveDown();

            doc.fillColor('black').fontSize(14).text('Aprovador', { underline: true });
            doc.text(`Nome: ${relatorioAprovador.usuario.nome}`);
            doc.text(`Status de Aprovação: ${relatorioAprovador.status_aprovacao}`);
            doc.text(`Critérios de Aceitação:`);
            doc.fillColor('black').text(`- Status do Documento: `, { continued: true });
            doc.fillColor(relatorioAprovador.doc_status ? 'green' : 'red').text(relatorioAprovador.doc_status ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Status do Recebedor: `, { continued: true });
            doc.fillColor(relatorioAprovador.info_recebedor_status ? 'green' : 'red').text(relatorioAprovador.info_recebedor_status ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Status do Analista: `, { continued: true });
            doc.fillColor(relatorioAprovador.info_analista_status ? 'green' : 'red').text(relatorioAprovador.info_analista_status ? 'Aprovado' : 'Rejeitado');
            doc.fillColor('black').text(`- Revisão do Aprovador: "${relatorioAprovador.revisao_aprovador}"`);
            doc.fillColor('black').text(`- Status Final de Aprovação: `, { continued: true });
            doc.fillColor(relatorioAprovador.status_final_aprovacao ? 'green' : 'red').text(relatorioAprovador.status_final_aprovacao ? 'Aprovado' : 'Rejeitado');

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