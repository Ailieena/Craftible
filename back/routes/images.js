var express = require('express');
var router = express.Router();
var data = require('./data.js');


router.get('/', (req, res) => {
    res.json(data.images);
});

router.get('/:id', (req, res) => { //1-> 0, why??
    const imageId = req.params.id
    if (data.images.hasOwnProperty(imageId)){
      res.json(data.images[imageId]);
    }
    else return res.json({ "error": "image doesn't exist."})
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
