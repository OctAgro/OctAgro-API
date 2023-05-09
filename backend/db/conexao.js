/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'octagro',
    define: {
        timestamps: true,
        freezeTableName: true
      },
})

module.exports = sequelize