const { Sequelize, Op, Model, DataTypes } = require("sequelize");


const sequelizedb = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = sequelizedb.define('User', {
  userId: DataTypes.STRING,
  email: DataTypes.STRING,
  login: DataTypes.STRING
});

module.exports = sequelizedb;