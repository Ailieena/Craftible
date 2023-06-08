const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelizedb = require('./models.js')

// console.log(sequelizedb);

// sequelizedb.models.User.sync().then(() => {
//   var user = new sequelizedb.models.User({});
//   user.login = 'Karolinka';
//   user.save();
// })

sequelizedb.models.User.findAll().then((users) => {
  users.forEach(u => console.log(u.login));
})

