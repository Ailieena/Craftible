var express = require('express');
var router = express.Router();
var sequelizedb = require('../models.js');


router.get('/', (req, res) => {
  sequelizedb.models.Image.findAll()
  .then((crafts) => {
    console.log("images get")
    res.json(crafts)
  })
  .catch(error => {
    console.error('Error retrieving images:', error);
  });
});

router.get('/:id', (req, res) => {
  const reqImageId = req.params.id
  sequelizedb.models.Image.findByPk(reqImageId)
  .then((reqImage) => {
    console.log("image get" + reqImage)
    res.json(reqImage)
  })
  .catch(error => {
    console.error('Error retrieving image:', error);
  });
});

router.post('/', (req, res) => { 
  const image = req.body; 
  let id = md5(image);
  //saving to the database
});

router.delete('/:id', (req, res) => {
    const imageId = req.params.id
    if (data.images.hasOwnProperty(imageId)){
      //??
    }
    else return res.json({ "error": "image doesn't exist."})
});

module.exports = router;
