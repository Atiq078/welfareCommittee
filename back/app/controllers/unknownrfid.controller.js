const UnknownRfid = require("../models/unknownrfid.model.js");

// Create and Save a new UnknownRfid
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a UnknownRfid
  const unknownrfid = new UnknownRfid({
    timestamp: req.body.timestamp,
    rfid: req.body.rfid || false
  });

  // Save UnknownRfid in the database
  UnknownRfid.create(unknownrfid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UnknownRfid."
      });
    else res.send(data);
  });
};

// Retrieve all UnknownRfids from the database (with condition).
exports.findAll = (req, res) => {
  const timestamp = req.query.timestamp;

  UnknownRfid.getAll(timestamp, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving unknownrfids."
      });
    else res.send(data);
  });
};

// Find a single UnknownRfid by Id
exports.findOne = (req, res) => {
  UnknownRfid.findById(req.params.rfid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found UnknownRfid with rfid ${req.params.rfid}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving UnknownRfid with rfid " + req.params.rfid
        });
      }
    } else res.send(data);
  });
};

// find all published UnknownRfids
exports.findAllPublished = (req, res) => {
  UnknownRfid.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving unknownrfids."
      });
    else res.send(data);
  });
};

// Update a UnknownRfid identified by the rfid in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  UnknownRfid.updateById(
    req.params.rfid,
    new UnknownRfid(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found UnknownRfid with rfid ${req.params.rfid}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating UnknownRfid with rfid " + req.params.rfid
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a UnknownRfid with the specified rfid in the request
exports.delete = (req, res) => {
  UnknownRfid.remove(req.params.rfid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found UnknownRfid with rfid ${req.params.rfid}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete UnknownRfid with rfid " + req.params.rfid
        });
      }
    } else res.send({ message: `UnknownRfid was deleted successfully!` });
  });
};

// Delete all UnknownRfids from the database.
exports.deleteAll = (req, res) => {
  UnknownRfid.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all unknownrfids."
      });
    else res.send({ message: `All UnknownRfids were deleted successfully!` });
  });
};
