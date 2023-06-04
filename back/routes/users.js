var express = require('express');
var router = express.Router();
var data = require('./data.js').default;


router.get('/', (req, res) => {
    res.json(data.users);
});

router.get('/:id', (req, res) => {
  const userId = req.params.id
  if (data.users.hasOwnProperty(userId)){
    res.json(data.users[userId]);
  }
  else return res.json({ "error": "User doesn't exist."})
});

router.post('/', (req, res) => {
  const user = req.body;
  //uploading the user to the database
});

router.put('/:id', (req, res) => { 
  const userId = req.params.id
  if (data.users.hasOwnProperty(userId)){
    //update here
  }
  else return res.json({ "error": "User doesn't exist."})
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id
  if (data.users.hasOwnProperty(userId)){
    //delete here
  }
  else return res.json({ "error": "User doesn't exist."})
});

module.exports = router;
