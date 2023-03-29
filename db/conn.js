const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'teste',
    define: {
        timestamps: true,
        freezeTableName: true
      },
})

/* sequelize.authenticate()
  .then(() => {
        console.log('Conexão feita com sucesso!')
    })
 .catch(erro => {
        console.error('Conexão falhou deivo ao erro: ', erro)
    }); */

module.exports = sequelize