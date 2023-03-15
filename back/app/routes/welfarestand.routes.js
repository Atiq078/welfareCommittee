module.exports = app => {
  const welfarestands = require("../controllers/welfarestand.controller.js");

  var router = require("express").Router();

  // Create a new WelfareStand
  router.post("/", welfarestands.create);

  // Retrieve all WelfareStands
  router.get("/", welfarestands.findAll);

  // Retrieve all published WelfareStands
  router.get("/published", welfarestands.findAllPublished);

  // Retrieve a single WelfareStand with wert
  router.get("/:wert", welfarestands.findOne);

  // Update a WelfareStand with wert
  router.put("/:wert", welfarestands.update);

  // Delete a WelfareStand with wert
  router.delete("/:wert", welfarestands.delete);

  // Delete all WelfareStands
  router.delete("/", welfarestands.deleteAll);

  app.use('/api/welfarestands', router);
};
