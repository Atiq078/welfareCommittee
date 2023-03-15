module.exports = app => {
  const errorlogs = require("../controllers/errorlog.controller.js");

  var router = require("express").Router();

  // Create a new ErrorLog
  router.post("/", errorlogs.create);

  // Retrieve all Candidates
  router.get("/", errorlogs.findAll);

  // Retrieve all published Candidates
  router.get("/published", errorlogs.findAllPublished);

  // Retrieve a single ErrorLog with lastuserid
  router.get("/:lastuserid", errorlogs.findOne);

  // Update a ErrorLog with lastuserid
  router.put("/:lastuserid", errorlogs.update);

  // Delete a ErrorLog with lastuserid
  router.delete("/:lastuserid", errorlogs.delete);

  // Delete all Candidates
  router.delete("/", errorlogs.deleteAll);

  app.use('/api/errorlogs', router);
};
