var express = require('express');
var router = express.Router();
var sequelizedb = require('../models.js');
const jwt = require('jsonwebtoken');

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


function generateAccessToken(username) {
  return jwt.sign(username, 'kotek');
}

router.post('/login', (req, res) => {
  const data = req.body;
  console.log("trying to log in")
  sequelizedb.models.User.findOne({ where: { login: data.login, passwordHash: data.password  }} )
  .then((user) => { //sending user? userid?
    if(user){
      console.log("user " + user.login + " logged in")
      var token = generateAccessToken(user.login)
      var data = {
        token: token,
        userId: user.userId,
        login: user.login
      }
      res.json(data);
      res.statusCode = 200
      res.send()
    }
    else {
      res.statusCode = 401
      res.send()
    }
  })
});

router.post('/register', (req, res) => {
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
