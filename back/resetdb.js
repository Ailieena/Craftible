const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelizedb = require('./models.js')

const userData = [
  {
    email: 'john@example.com',
    login: 'john123',
    passwordHash: 'password123'
  },
  {
    email: 'jane@example.com',
    login: 'jane456',
    passwordHash: 'password456'
  },
  {
    email: 'ann@example.com',
    login: 'ann789',
    passwordHash: 'password789'
  }
];

const craftData = [
  { name: 'knitting' },
  { name: 'crochet' },
  { name: 'sewing' },
  { name: 'cross-stitch' },
  { name: 'embroidery' },
  { name: 'painting' },
  { name: 'polymer clay' },
  { name: 'other' }
];
const categoryData = [
  { name: 'decoration' },
  { name: 'accessory' },
  { name: 'clothing' },
  { name: 'other' }
];

const imageData = [
  {
    imageId: 1,
    filename: '6.jpg'

  },
  {
    imageId: 2,
    filename: '7.jpg'
  },
  {
    imageId: 3,
    filename: '8.jpg'
  },
  {
    imageId: 4,
    filename: 'bluecrochet.jpeg'
  },
  {
    imageId: 5,
    filename: 'yellowhat.jpeg'
  }
];

const patternData = [
  {
    userId: 1,
    craftId: 1,
    categoryId: 2,
    imageId: 1,
    name: 'Early Autumn Hat',
    description: 'A cozy hat perfect for the early autumn season.'
  },
  {
    userId: 2,
    craftId: 3,
    categoryId: 3,
    imageId: 2,
    name: 'Elegant Evening Dress',
    description: 'An elegant dress for special evening occasions.'
  },
  {
    userId: 1,
    craftId: 2,
    categoryId: 4,
    imageId: null,
    name: 'Crocheted Baby Blanket',
    description: 'A soft and warm blanket for babies, crocheted with love.'
  },
  {
    userId: 3,
    craftId: 6,
    categoryId: 1,
    imageId: 3,
    name: 'Landscape Painting',
    description: 'A beautiful landscape painting capturing the essence of nature.'
  }
];

const projectData = [
  {
    patternId: 1,
    userId: 1,
    craftId: 1,
    categoryId: 2,
    imageId: 5,
    name: 'John\'s Early Autumn Hat',
    description: 'Used baby merino wool in yellow.'
  },
  {
    patternId: 3,
    userId: 2,
    craftId: 2,
    categoryId: 4,
    imageId: 4,
    name: 'Blue Crocheted Baby Blanket',
    description: 'Baby blue blanket for my niece'
  },
  {
    patternId:2,
    userId: 2,
    craftId: 3,
    categoryId: 3,
    name: 'Jane\'s Elegant Evening Dress',
    description: 'I made a shorter version.'
  },
];



sequelizedb.sync()
  .then(async (syncDb) => {
    console.log("sync start")
    Promise.all([
      sequelizedb.models.User.bulkCreate(userData),
      sequelizedb.models.Craft.bulkCreate(craftData),
      sequelizedb.models.Category.bulkCreate(categoryData),
      sequelizedb.models.Image.bulkCreate(imageData),
      sequelizedb.models.Pattern.bulkCreate(patternData),
      sequelizedb.models.Project.bulkCreate(projectData)      
    ])
    .then(() => {
      console.log('data inserted');
    })
    .catch((error) => {
      console.error('error inserting data:', error);
    });
    console.log("sync end")
  })
  .catch((err) => {
    console.log("sync err:" + err)
  })

