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
  // userId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'User',
  //     key: 'userId'
  //   }
  // },
  // craftId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'Craft',
  //     key: 'craftId'
  //   }
  // },
  // categoryId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   foreignKey: {
  //     model: 'Category',
  //     key: 'categoryId'
  //   }
  // },
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
  // patternId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'Pattern',
  //     key: 'patternId'
  //   }
  // },
  // userId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'User',
  //     key: 'userId'
  //   }
  // },
  // craftId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'Craft',
  //     key: 'craftId'
  //   }
  // },
  // categoryId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'Category',
  //     key: 'categoryId'
  //   }
  // },
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


// sequelizedb.sync()
// .then(() => {
//   console.log("sync")
// })
// .catch((err) => {
//   console.log("Sync error: " + err.message)
// })

module.exports = sequelizedb;