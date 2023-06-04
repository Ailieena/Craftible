var express = require('express');
var router = express.Router();
var data = require('./data.js');


router.get('/', (req, res) => {
    res.json(data.categories);
});

router.get('/:id', (req, res) => {
    const categoryId = req.params.id
    if (data.categories.hasOwnProperty(categoryId)){
      res.json(data.categories[categoryId]);
    }
    else return res.json({ "error": "category doesn't exist."})
  });

module.exports = router;
