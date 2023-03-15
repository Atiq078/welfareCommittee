module.exports = app => {
  const unknownrfids = require("../controllers/unknownrfid.controller.js");

  var router = require("express").Router();

  // Create a new UnknownRfid
  router.post("/", unknownrfids.create);

  // Retrieve all UnknownRfids
  router.get("/", unknownrfids.findAll);

  // Retrieve all published UnknownRfids
  router.get("/published", unknownrfids.findAllPublished);

  // Retrieve a single UnknownRfid with rfid
  router.get("/:rfid", unknownrfids.findOne);

  // Update a UnknownRfid with rfid
  router.put("/:rfid", unknownrfids.update);

  // Delete a UnknownRfid with rfid
  router.delete("/:rfid", unknownrfids.delete);

  // Delete all UnknownRfids
  router.delete("/", unknownrfids.deleteAll);

  app.use('/api/unknownrfids', router);
};
