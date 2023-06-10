var express = require('express');
var router = express.Router();
var sequelizedb = require('../models.js');
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['Authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, 'kotek', (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
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
  res.statusCode = 200
  res.send()
});

router.put('/:id', (req, res) => { //updating a pattern
  const patternId = req.params.id
  if (data.patterns.hasOwnProperty(patternId)){
    //updating pattern
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
