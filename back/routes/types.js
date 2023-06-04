var express = require('express');
var router = express.Router();
var data = require('./data.js').default;


router.get('/', (req, res) => {
    res.json(data.types);
});

router.get('/:id', (req, res) => {
    const typeId = req.params.id
    if (data.types.hasOwnProperty(typeId)){
      res.json(data.types[typeId]);
    }
    else return res.json({ "error": "type doesn't exist."})
  });

module.exports = router;
