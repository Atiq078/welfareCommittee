const LoanUnit = require("../models/loanunit.model.js");

// Create and Save a new LoanUnit
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a LoanUnit
  const loanunit = new LoanUnit({
    timestamp: req.body.timestamp,
    preis: req.body.preis || false
  });

  // Save LoanUnit in the database
  LoanUnit.create(loanunit, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the LoanUnit."
      });
    else res.send(data);
  });
};

// Retrieve all LoanUnits from the database (with condition).
exports.findAll = (req, res) => {
  const timestamp = req.query.timestamp;

  LoanUnit.getAll(timestamp, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loanunits."
      });
    else res.send(data);
  });
};

// Find a single LoanUnit by Id
exports.findOne = (req, res) => {
  LoanUnit.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found LoanUnit with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving LoanUnit with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published LoanUnits
exports.findAllPublished = (req, res) => {
  LoanUnit.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loanunits."
      });
    else res.send(data);
  });
};

// Update a LoanUnit identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  LoanUnit.updateById(
    req.params.id,
    new LoanUnit(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found LoanUnit with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating LoanUnit with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a LoanUnit with the specified id in the request
exports.delete = (req, res) => {
  LoanUnit.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found LoanUnit with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete LoanUnit with id " + req.params.id
        });
      }
    } else res.send({ message: `LoanUnit was deleted successfully!` });
  });
};

// Delete all LoanUnits from the database.
exports.deleteAll = (req, res) => {
  LoanUnit.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all loanunits."
      });
    else res.send({ message: `All LoanUnits were deleted successfully!` });
  });
};
