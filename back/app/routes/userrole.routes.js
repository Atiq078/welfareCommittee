module.exports = app => {
  const userroles = require("../controllers/userrole.controller.js");

  var router = require("express").Router();


  // Retrieve a single Candidate with id
  router.get("/:userId", userroles.findOne);

  // Update a Candidate with id
  router.put("/:userId", userroles.update);

  // Delete a Candidate with id
  router.delete("/:userId", userroles.delete);

  // Delete all Candidates
  router.delete("/", userroles.deleteAll);

  app.use('/api/userroles', router);
};
