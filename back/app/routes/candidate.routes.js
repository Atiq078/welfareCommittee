module.exports = app => {
  const candidates = require("../controllers/candidate.controller.js");

  var router = require("express").Router();

  // Create a new Candidate
  router.post("/", candidates.create);

  // Retrieve all Candidates
  router.get("/", candidates.findAll);

  // Retrieve all published Candidates
  router.get("/published", candidates.findAllPublished);

  // Retrieve a single Candidate with id
  router.get("/:id", candidates.findOne);

  // Update a Candidate with id
  router.put("/:id", candidates.update);

  // Delete a Candidate with id
  router.delete("/:id", candidates.delete);

  // Delete all Candidates
  router.delete("/", candidates.deleteAll);

  app.use('/api/candidates', router);
};
