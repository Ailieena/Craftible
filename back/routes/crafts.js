var express = require('express');
var router = express.Router();
var sequelizedb = require('../models.js');


router.get('/', (req, res) => {
  sequelizedb.models.Craft.findAll()
  .then((crafts) => {
    console.log("crafts get")
    res.json(crafts)
  })
  .catch(error => {
    console.error('Error retrieving crafts:', error);
  });
});

router.get('/:id', (req, res) => {
    const reqCraftId = req.params.id
    console.log("req.params.id = " + req.params.id)
    sequelizedb.models.Craft.findByPk(reqCraftId)
    .then((reqCraft) => {
      console.log("craft get" + reqCraft)
      res.json(reqCraft)
    })
    .catch(error => {
      console.error('Error retrieving craft:', error);
    });
  });

module.exports = router;
