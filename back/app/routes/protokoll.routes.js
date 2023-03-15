module.exports = app => {
  const protokolls = require("../controllers/protokoll.controller.js");

  var router = require("express").Router();

  // Create a new Protokoll
  router.post("/", protokolls.create);

  // Retrieve all Protokolls
  router.get("/", protokolls.findAll);

  // Retrieve all published Protokolls
  router.get("/published", protokolls.findAllPublished);

  // Retrieve a single Protokoll with id
  router.get("/:id", protokolls.findOne);

  // Update a Protokoll with id
  router.put("/:id", protokolls.update);

  // Delete a Protokoll with id
  router.delete("/:id", protokolls.delete);

  // Delete all Protokolls
  router.delete("/", protokolls.deleteAll);

  app.use('/api/protokolls', router);
};
