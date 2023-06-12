var express = require('express');
var router = express.Router();
var sequelizedb = require('../models.js');
var authenticateToken = require('./auth.js')

router.get('/', (req, res) => {
  sequelizedb.models.Pattern.findAll()
  .then((reqPatterns) => {
    console.log("patterns get")
    res.json(reqPatterns)
  })
  .catch(error => {
    console.error('Error retrieving patterns:', error);
  });
});

router.get('/:id', (req, res) => {
  const reqPatternId = req.params.id
  console.log("req.params.id = " + req.params.id)
  sequelizedb.models.Pattern.findByPk(reqPatternId)
  .then((reqPattern) => {
    console.log("pattern get" + reqPattern)
    console.log("pattern imageId: " + reqPattern.imageId)
    res.json(reqPattern)
  })
  .catch(error => {
    console.error('Error retrieving pattern:', error);
  });
});

router.post('/', authenticateToken, async (req, res) => {
  const newPattern = req.body;
  console.log(newPattern)
  const patt = await sequelizedb.models.Pattern.create(newPattern)
  console.log(patt)
  res.send()
});

router.put('/:id', (req, res) => {
  const patternId = req.params.id
  if (data.patterns.hasOwnProperty(patternId)){
    
  }
  else return res.json({ "error": "pattern doesn't exist."})
});

router.delete('/:id', (req, res) => {
  const patternId = req.params.id
  if (data.patterns.hasOwnProperty(patternId)){
    //deletinfg
  }
  else return res.json({ "error": "pattern doesn't exist."})
});

module.exports = router;
