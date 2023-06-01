const express = require('express');
const Sequelize = require("sequelize");
const db = require("../db/conexao");
const Produto = require("../models/Produto");
const Fornecedor = require("../models/Fornecedor");
const Pedido = require("../models/Pedido");
const { createCanvas, registerFont } = require("canvas");
const { Chart, registerables } = require("chart.js");
Chart.register(...registerables);

class Graficos {
  static async graficoProduto(req, res) {
    try {
      await db.sync();

      const produtos = await Produto.findAll({
        attributes: ["nome_produto", "quantidade_produto"],
      });

      const labels = produtos.map((produto) => produto.nome_produto);
      const data = produtos.map((produto) => produto.quantidade_produto);

      const canvas = createCanvas(800, 600);
      const ctx = canvas.getContext("2d");

      const chartType = req && req.query && req.query.type ? req.query.type : "bar";
      const chartOptions = {
        scales: {
          x: {
            ticks: {
              font: {
                size: 32, // Defina o tamanho da fonte desejado para o eixo x
              },
            },
          },
          y: {
            ticks: {
              font: {
                size: 32, // Defina o tamanho da fonte desejado para o eixo y
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 32, // Defina o tamanho da fonte desejado para as legendas
              },
            },
          },
        },
      };

      new Chart(ctx, {
        type: chartType || "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Quantidade de Produto",
              data,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: chartOptions,
      });

      const imageBuffer = canvas.toBuffer();

      res.contentType("image/png");
      res.send(imageBuffer);
    } catch (error) {
      console.error("Erro ao gerar o gráfico", error);
      return null;
    }
  }

  static async graficoFornecedor(req, res) {
    try {
      await db.sync();

      const fornecedores = await Fornecedor.findAll({
        attributes: ["nome_fornecedor", "numero"],
      });

      const labels = fornecedores.map((fornecedor) => fornecedor.nome_fornecedor);
      const data = [300,300];

      const canvas = createCanvas(800, 600); // Define as dimensões do canvas
      const ctx = canvas.getContext("2d");

      const chartType = req && req.query && req.query.type ? req.query.type : "pie"
      // Renderizar o gráfico em um canvas
      new Chart(ctx, {
        type: chartType || "pie",
        data: {
          labels,
          datasets: [
            {
              label: "Quantidade de Fornecedores",
              data,
              borderWidth: 1,
            },
          ],
        },
      });

      // Obter a representação em buffer da imagem do canvas
      const imageBuffer = canvas.toBuffer();

      res.contentType("image/png");
      res.send(imageBuffer);
    } catch (error) {
      console.error("Erro ao gerar o gráfico", error);
      return null;
    }
  }

  static async graficoPedido(req, res) {
    try {
      await db.sync();
  
      const pedidos = await Pedido.findAll({
        raw: true,
        attributes: ['id_pedido'],
        include: [
          {
            model: Produto,
            required: true,
            attributes: ['nome_produto'],
          },
          {
            model: Fornecedor,
            required: true,
            attributes: ['nome_fornecedor'],
          },
        ],
        order: [['id_produto', 'ASC']]
      });

      console.log(pedidos)
  
      const labelsProduto = pedidos.map((pedido) => pedido['produto.nome_produto']);
      const labelsFornecedor = pedidos.map((pedido) => pedido['fornecedor.nome_fornecedor']);
      const numeroPedidos = pedidos.reduce((count) => count + 1, 0);
  
      const canvas = createCanvas(800, 600);
      const ctx = canvas.getContext("2d");

      console.log(labelsProduto, labelsFornecedor)

      console.log(numeroPedidos)

  
      const chartType = req && req.query && req.query.type ? req.query.type : "pie";
  
      new Chart(ctx, {
        type: chartType || "pie",
        data: {
          labels: [labelsProduto, labelsFornecedor],
          datasets: [
            {
              label: "Quantidade de Pedidos",
              data: [numeroPedidos],
              borderWidth: 1,
            },
          ],
        },
      });
  
      const imageBuffer = canvas.toBuffer();
  
      res.contentType("image/png");
      res.send(imageBuffer);
    } catch (error) {
      console.error("Erro ao gerar o gráfico", error);
      return null;
    }
  }
  
}

module.exports = Graficos;
