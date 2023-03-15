module.exports = app => {
  const tokens = require("../controllers/token.controller.js");

  var router = require("express").Router();

  // Create a new Token
  router.post("/", tokens.create);

  // Retrieve all Tokens
  router.get("/", tokens.findAll);

  // Retrieve all published Tokens
  router.get("/published", tokens.findAllPublished);

  // Retrieve a single Token with userid
  router.get("/:userid", tokens.findOne);

  // Update a Token with userid
  router.put("/:userid", tokens.update);

  // Delete a Token with userid
  router.delete("/:userid", tokens.delete);

  // Delete all Tokens
  router.delete("/", tokens.deleteAll);

  app.use('/api/tokens', router);
};
