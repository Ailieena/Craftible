var express = require('express');
var router = express.Router();
var data = require('./data.js').default;


router.get('/', (req, res) => {
    res.json(data.patterns);
});

router.get('/:id', (req, res) => {
    const patternId = req.params.id
    if (data.patterns.hasOwnProperty(patternId)){
      res.json(data.patterns[patternId]);
      
    }
    else return res.json({ "error": "pattern doesn't exist."})
  });

router.post('/', (req, res) => { //creating a pattern
  const pattern = req.body;
  //await AppDataSource.manager.save(project)
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
