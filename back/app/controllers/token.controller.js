const Token = require("../models/token.model.js");

// Create and Save a new Token
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Token
  const token = new Token({
    token: req.body.token,
    userid: req.body.userid  || false
  });

  // Save Token in the database
  Token.create(token, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Token."
      });
    else res.send(data);
  });
};

// Retrieve all Tokens from the database (with condition).
exports.findAll = (req, res) => {
  const token = req.query.token;

  Token.getAll(token, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tokens."
      });
    else res.send(data);
  });
};

// Find a single Token by Id
exports.findOne = (req, res) => {
  Token.findById(req.params.userid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Token with userid ${req.params.userid}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Token with userid " + req.params.userid
        });
      }
    } else res.send(data);
  });
};

// find all published Tokens
exports.findAllPublished = (req, res) => {
  Token.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tokens."
      });
    else res.send(data);
  });
};

// Update a Token identified by the userid in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Token.updateById(
    req.params.userid,
    new Token(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Token with userid ${req.params.userid}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Token with userid " + req.params.userid
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Token with the specified userid in the request
exports.delete = (req, res) => {
  Token.remove(req.params.userid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Token with userid ${req.params.userid}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Token with userid " + req.params.userid
        });
      }
    } else res.send({ message: `Token was deleted successfully!` });
  });
};

// Delete all Tokens from the database.
exports.deleteAll = (req, res) => {
  Token.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tokens."
      });
    else res.send({ message: `All Tokens were deleted successfully!` });
  });
};
