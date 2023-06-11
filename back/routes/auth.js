const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  console.log(req.headers.authorization)
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null){
    console.log("empty token")
    return res.sendStatus(401)
  } 

  jwt.verify(token, 'kotek', (err, user) => {
    if (err) return res.sendStatus(403)

    req.user = user
    next()
  })
};

module.exports = authenticateToken;