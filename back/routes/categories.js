var express = require('express');
var router = express.Router();
var sequelizedb = require('../models.js');

router.get('/', (req, res) => {
  sequelizedb.models.Category.findAll()
  .then((categories) => {
    console.log("categories get")
    res.json(categories)
  })
  .catch(error => {
    console.error('Error retrieving categories:', error);
  });
});

router.get('/:id', (req, res) => {
  const reqCategoryId = req.params.id
  sequelizedb.models.Category.findByPk(reqCategoryId)
  .then((reqCategory) => {
    console.log("category get")
    res.json(reqCategory)
  })
  .catch(error => {
    console.error('Error retrieving Category:', error);
  });
});

module.exports = router;
