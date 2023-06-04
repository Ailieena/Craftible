var express = require('express');
var router = express.Router();
var data = require('./data.js').default;


router.get('/', (req, res) => {
    res.json(data.projects);
});

router.get('/:id', (req, res) => {
  const projectId = req.params.id
  if (data.projects.hasOwnProperty(projectId)){
    res.json(data.projects[projectId]);
  }
  else return res.json({ "error": "project doesn't exist."})
});

router.post('/', (req, res) => { //creating a project
  const project = req.body; //i assume the nessesary data is here, somehow?
  //?
  //await AppDataSource.manager.save(project)
});

router.put('/:id', (req, res) => { //updating a project
  const projectId = req.params.id
  if (data.projects.hasOwnProperty(projectId)){
    //update here
  }
  else return res.json({ "error": "project doesn't exist."})
});

router.delete('/:id', (req, res) => {
  const projectId = req.params.id
  if (data.projects.hasOwnProperty(projectId)){
    res.json(data.projects[projectId]);
  }
  else return res.json({ "error": "project doesn't exist."})
});

module.exports = router;
