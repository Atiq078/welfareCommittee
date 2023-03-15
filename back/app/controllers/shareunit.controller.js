const ShareUnit = require("../models/shareunit.model.js");

// Create and Save a new ShareUnit
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a ShareUnit
  const shareunit = new ShareUnit({
    timestamp: req.body.timestamp,
    preis: req.body.preis || false
  });

  // Save ShareUnit in the database
  ShareUnit.create(shareunit, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ShareUnit."
      });
    else res.send(data);
  });
};

// Retrieve all ShareUnits from the database (with condition).
exports.findAll = (req, res) => {
  const timestamp = req.query.timestamp;

  ShareUnit.getAll(timestamp, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving shareunits."
      });
    else res.send(data);
  });
};

// Find a single ShareUnit by Id
exports.findOne = (req, res) => {
  ShareUnit.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ShareUnit with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving ShareUnit with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published ShareUnits
exports.findAllPublished = (req, res) => {
  ShareUnit.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving shareunits."
      });
    else res.send(data);
  });
};

// Update a ShareUnit identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  ShareUnit.updateById(
    req.params.id,
    new ShareUnit(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found ShareUnit with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating ShareUnit with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a ShareUnit with the specified id in the request
exports.delete = (req, res) => {
  ShareUnit.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ShareUnit with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete ShareUnit with id " + req.params.id
        });
      }
    } else res.send({ message: `ShareUnit was deleted successfully!` });
  });
};

// Delete all ShareUnits from the database.
exports.deleteAll = (req, res) => {
  ShareUnit.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all shareunits."
      });
    else res.send({ message: `All ShareUnits were deleted successfully!` });
  });
};
