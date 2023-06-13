const { Sequelize, Op, Model, DataTypes } = require("sequelize");


const sequelizedb = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});


const User = sequelizedb.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255]
    }
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255]
    }
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Craft = sequelizedb.define('Craft', {
  craftId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Category = sequelizedb.define('Category', {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


const Pattern = sequelizedb.define('Pattern', {
  patternId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

User.hasMany(Pattern,
  {
    foreignKey: 'userId'
  })
  Craft.hasMany(Pattern,
  {
    foreignKey: 'craftId'
  })
  Category.hasMany(Pattern,
  {
    foreignKey: 'categoryId'
  })

const Project = sequelizedb.define('Project', {
  projectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

User.hasMany(Project,
{
  foreignKey: 'userId'
})
Craft.hasMany(Project,
{
  foreignKey: 'craftId'
})
Category.hasMany(Project,
{
  foreignKey: 'categoryId'
})
Pattern.hasMany(Project,
{
  foreignKey: 'patternId'
})

const Image = sequelizedb.define('Image', {
  imageId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Image.hasOne(Project,
  {
    foreignKey: 'imageId'
  })

Image.hasOne(Pattern,
{
  foreignKey: 'imageId'
})

module.exports = sequelizedb;