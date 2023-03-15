module.exports = app => {
  const loanunits = require("../controllers/loanunit.controller.js");

  var router = require("express").Router();

  // Create a new LoanUnit
  router.post("/", loanunits.create);

  // Retrieve all LoanUnits
  router.get("/", loanunits.findAll);

  // Retrieve all published LoanUnits
  router.get("/published", loanunits.findAllPublished);

  // Retrieve a single LoanUnit with id
  router.get("/:id", loanunits.findOne);

  // Update a LoanUnit with id
  router.put("/:id", loanunits.update);

  // Delete a LoanUnit with id
  router.delete("/:id", loanunits.delete);

  // Delete all LoanUnits
  router.delete("/", loanunits.deleteAll);

  app.use('/api/loanunits', router);
};
