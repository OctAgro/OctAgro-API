const Sequelize = require("sequelize")
const Database = require("../db/conexao")
const Usuario = require("./usuario")


const Recebedor = Database.define("recebedor", {
    id_relatorio: {
        type: Sequelize.INTEGER,
        autoIncrement:  true,
        autoNull: false,
        primaryKey: true
    },

    nome_fornecedor: {
        type: Sequelize.STRING,
        allowNull: false
    },

    nome_entragador: {
        type: Sequelize.STRING,
        allowNull: false
    },

    placa_veiculo: {
        type: Sequelize.STRING,
        allowNull: false
   },

   data_entrada: {
       type: Sequelize.DATE,
       allowNull: false
   },

   horario_entrada: {
        type: Sequelize.TIME,
        allowNull: false,
   },

   documento_entrada: {
       type: Sequelize.STRING,
       allowNull: true,
   },

   produto: {
       type: Sequelize.STRING,
       allowNull: false
   },

   quantidade: {
       type: Sequelize.FLOAT,
       allowNull: false
   },

   unidade_medida: {
       type: Sequelize.STRING,
       allowNull: false
   },

   coloracao: {
    type: Sequelize.BOOLEAN,
    allowNull: false
   },

   odor: {
    type: Sequelize.BOOLEAN,
    allowNull: false
   },

   ausencia_animais: {
    type: Sequelize.BOOLEAN,
    allowNull: false
   },

   ausencia_mofo: {
    type: Sequelize.BOOLEAN,
    allowNull: false
   }
})

module.exports = Recebedor