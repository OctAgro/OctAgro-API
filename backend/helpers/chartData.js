const express = require('express');
const Sequelize = require("sequelize");
const db = require("../db/conexao");
const Produto = require("../models/Produto");
const Fornecedor = require("../models/Fornecedor");
const Pedido = require("../models/Pedido");
const { createCanvas, registerFont } = require("canvas");
const { Chart, registerables } = require("chart.js");
const Usuario = require('../models/Usuario');
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

      const chartType = req && req.query && req.query.type ? req.query.type : "pie";
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
              callback: function (value, index, values) {
                // Retorna apenas o valor mínimo (0) e o valor máximo (1)
                if (index === 0 || index === values.length - 1) {
                  return value.toString();
                } else {
                  return "";
                }
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
        type: chartType || "pie",
        data: {
          labels,
          datasets: [
            {
              label: "Quantidade de Produto",
              data,
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

  static async graficoUsuario(req, res) {
    try {
      await db.sync();
  
      const funcoes = await Usuario.findAll({
        attributes: ["funcao"],
        group: ["funcao"],
      });
  
      const labels = funcoes.map((funcao) => funcao.funcao);
      const data = await Promise.all(
        funcoes.map(async (funcao) => {
          const count = await Usuario.count({
            where: { funcao: funcao.funcao },
          });
          return count;
        })
      );
  
      const canvas = createCanvas(800, 600); // Define as dimensões do canvas
      const ctx = canvas.getContext("2d");
  
      const chartType = req && req.query && req.query.type ? req.query.type : "pie";
      // Renderizar o gráfico em um canvas
      new Chart(ctx, {
        type: chartType || "pie",
        data: {
          labels,
          datasets: [
            {
              label: "Quantidade de Usuários",
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
        attributes: [
          [Sequelize.fn('COUNT', Sequelize.col('pedido.id_pedido')), 'quantidadePedidos'],
        ],
        include: [
          {
            model: Produto,
            required: true,
            attributes: ['nome_produto'],
          },
        ],
        group: ['produto.nome_produto'],
        raw: true,
      });
  
      const labels = pedidos.map((pedido) => pedido['produto.nome_produto']);
      const quantidadePedidos = pedidos.map((pedido) => pedido.quantidadePedidos);
  
      const canvas = createCanvas(800, 600);
      const ctx = canvas.getContext("2d");
  
      const chartType = req && req.query && req.query.type ? req.query.type : "bar";
  
      new Chart(ctx, {
        type: chartType || "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Quantidade de Pedidos",
              data: quantidadePedidos,
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
