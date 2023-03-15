const Action = require("../models/action.model.js");

// Create and Save a new Action
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Action
  const action = new Action({
    description: req.body.description  || false
  });

  // Save Action in the database
  Action.create(action, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Action."
      });
    else res.send(data);
  });
};

// Retrieve all Actions from the database (with condition).
exports.findAll = (req, res) => {
  const description = req.query.description;

  Action.getAll(description, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving actions."
      });
    else res.send(data);
  });
};

// Find a single Action by Id
exports.findOne = (req, res) => {
  Action.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Action with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Action with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Actions
exports.findAllPublished = (req, res) => {
  Action.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving actions."
      });
    else res.send(data);
  });
};

// Update a Action identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Action.updateById(
    req.params.id,
    new Action(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Action with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Action with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Action with the specified id in the request
exports.delete = (req, res) => {
  Action.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Action with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Action with id " + req.params.id
        });
      }
    } else res.send({ message: `Action was deleted successfully!` });
  });
};

// Delete all Actions from the database.
exports.deleteAll = (req, res) => {
  Action.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all actions."
      });
    else res.send({ message: `All Actions were deleted successfully!` });
  });
};
