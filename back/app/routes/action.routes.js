module.exports = app => {
  const actions = require("../controllers/action.controller.js");

  var router = require("express").Router();

  // Create a new Action
  router.post("/", actions.create);

  // Retrieve all Actions
  router.get("/", actions.findAll);

  // Retrieve all published Actions
  router.get("/published", actions.findAllPublished);

  // Retrieve a single Action with id
  router.get("/:id", actions.findOne);

  // Update a Action with id
  router.put("/:id", actions.update);

  // Delete a Action with id
  router.delete("/:id", actions.delete);

  // Delete all Actions
  router.delete("/", actions.deleteAll);

  app.use('/api/actions', router);
};
