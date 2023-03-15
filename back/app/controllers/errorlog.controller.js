const ErrorLog = require("../models/errorlog.model.js");

// Create and Save a new ErrorLog
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a ErrorLog
  const errorlog = new ErrorLog({
    lastuserid: req.body.lastuserid,
    timestamp: req.body.timestamp,
    message: req.body.message,
    protokollid: req.body.protokollid || false
  });

  // Save ErrorLog in the database
  ErrorLog.create(errorlog, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ErrorLog."
      });
    else res.send(data);
  });
};

// Retrieve all Candidates from the database (with condition).
exports.findAll = (req, res) => {
  const message = req.query.message;

  ErrorLog.getAll(message, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving errorlogs."
      });
    else res.send(data);
  });
};

// Find a single ErrorLog by lastuserid
exports.findOne = (req, res) => {
  ErrorLog.findById(req.params.lastuserid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ErrorLog with lastuserid ${req.params.lastuserid}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving ErrorLog with lastuserid " + req.params.lastuserid
        });
      }
    } else res.send(data);
  });
};

// find all published Candidates
exports.findAllPublished = (req, res) => {
  ErrorLog.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving errorlogs."
      });
    else res.send(data);
  });
};

// Update a ErrorLog identified by the lastuserid in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  ErrorLog.updateById(
    req.params.lastuserid,
    new ErrorLog(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found ErrorLog with lastuserid ${req.params.lastuserid}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating ErrorLog with lastuserid " + req.params.lastuserid
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a ErrorLog with the specified lastuserid in the request
exports.delete = (req, res) => {
  ErrorLog.remove(req.params.lastuserid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ErrorLog with lastuserid ${req.params.lastuserid}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete ErrorLog with lastuserid " + req.params.lastuserid
        });
      }
    } else res.send({ message: `ErrorLog was deleted successfully!` });
  });
};

// Delete all Candidates from the database.
exports.deleteAll = (req, res) => {
  ErrorLog.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all errorlogs."
      });
    else res.send({ message: `All Candidates were deleted successfully!` });
  });
};
