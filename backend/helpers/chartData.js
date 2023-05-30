const express = require('express')
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

      const canvas = createCanvas(800, 600); // Define as dimensões do canvas
      const ctx = canvas.getContext("2d");

      const chartType = req && req.query && req.query.type ? req.query.type : "bar"
      // Renderizar o gráfico em um canvas
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
}

module.exports = Graficos;
