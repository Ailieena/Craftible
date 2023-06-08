var express = require('express');
var router = express.Router();
var sequelizedb = require('../models.js');


router.get('/', (req, res) => {
  sequelizedb.models.User.findAll()
  .then((users) => {
    console.log("users get")
    res.json(users)
  })
  .catch(error => {
    console.error('Error retrieving users:', error);
  });
});

router.get('/:id', (req, res) => {
  const reqUserId = req.params.id
  sequelizedb.models.User.findByPk(reqUserId)
  .then((reqUser) => {
    console.log("user get")
    res.json(reqUser)
  })
  .catch(error => {
    console.error('Error retrieving user:', error);
  });
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
