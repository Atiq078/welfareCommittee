module.exports = app => {
  const shareunits = require("../controllers/shareunit.controller.js");

  var router = require("express").Router();

  // Create a new ShareUnit
  router.post("/", shareunits.create);

  // Retrieve all ShareUnits
  router.get("/", shareunits.findAll);

  // Retrieve all published ShareUnits
  router.get("/published", shareunits.findAllPublished);

  // Retrieve a single ShareUnit with id
  router.get("/:id", shareunits.findOne);

  // Update a ShareUnit with id
  router.put("/:id", shareunits.update);

  // Delete a ShareUnit with id
  router.delete("/:id", shareunits.delete);

  // Delete all ShareUnits
  router.delete("/", shareunits.deleteAll);

  app.use('/api/shareunits', router);
};
