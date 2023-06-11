var express = require('express');
var router = express.Router();
var sequelizedb = require('../models.js');
var authenticateToken = require('./auth.js')

router.get('/', (req, res) => {
  sequelizedb.models.Project.findAll()
  .then((projects) => {
    console.log("projects get")
    res.json(projects)
  })
  .catch(error => {
    console.error('Error retrieving projects:', error);
  });
});

router.get('/:id', (req, res) => {
  const reqProjectId = req.params.id
  console.log("req.params.id = " + req.params.id)
  sequelizedb.models.Project.findByPk(reqProjectId)
  .then((reqProject) => {
    console.log("pattern get" + reqProject)
    res.json(reqProject)
  })
  .catch(error => {
    console.error('Error retrieving project:', error);
  });
});

router.post('/', authenticateToken, async (req, res) => { 
  console.log("projects post")
  const newProject = req.body;
  console.log(newProject)
  const proj = await sequelizedb.models.Project.create(newProject)
  console.log(proj)
  res.send()
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
