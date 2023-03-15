module.exports = app => {
  const rfids = require("../controllers/rfid.controller.js");

  var router = require("express").Router();

  // Create a new Rfid
  router.post("/", rfids.create);

  // Retrieve all Rfids
  router.get("/", rfids.findAll);

  // Retrieve all published Rfids
  router.get("/published", rfids.findAllPublished);

  // Retrieve a single Rfid with userid
  router.get("/:userid", rfids.findOne);

  // Update a Rfid with userid
  router.put("/:userid", rfids.update);

  // Delete a Rfid with userid
  router.delete("/:userid", rfids.delete);

  // Delete all Rfids
  router.delete("/", rfids.deleteAll);

  app.use('/api/rfids', router);
};
