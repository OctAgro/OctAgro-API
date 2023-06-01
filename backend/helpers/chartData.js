const express = require('express');
const Sequelize = require("sequelize");
const db = require("../db/conexao");
const Produto = require("../models/Produto");
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
}

module.exports = Graficos;
