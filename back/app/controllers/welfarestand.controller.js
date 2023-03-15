const WelfareStand = require("../models/welfarestand.model.js");

// Create and Save a new WelfareStand
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a WelfareStand
  const welfarestand = new WelfareStand({
    timestamp: req.body.timestamp,
    wert: req.body.wert || false
  });

  // Save WelfareStand in the database
  WelfareStand.create(welfarestand, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the WelfareStand."
      });
    else res.send(data);
  });
};

// Retrieve all WelfareStands from the database (with condition).
exports.findAll = (req, res) => {
  const timestamp = req.query.timestamp;

  WelfareStand.getAll(timestamp, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving welfarestands."
      });
    else res.send(data);
  });
};

// Find a single WelfareStand by Id
exports.findOne = (req, res) => {
  WelfareStand.findById(req.params.wert, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found WelfareStand with wert ${req.params.wert}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving WelfareStand with wert " + req.params.wert
        });
      }
    } else res.send(data);
  });
};

// find all published WelfareStands
exports.findAllPublished = (req, res) => {
  WelfareStand.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving welfarestands."
      });
    else res.send(data);
  });
};

// Update a WelfareStand identified by the wert in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  WelfareStand.updateById(
    req.params.wert,
    new WelfareStand(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found WelfareStand with wert ${req.params.wert}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating WelfareStand with wert " + req.params.wert
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a WelfareStand with the specified wert in the request
exports.delete = (req, res) => {
  WelfareStand.remove(req.params.wert, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found WelfareStand with wert ${req.params.wert}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete WelfareStand with wert " + req.params.wert
        });
      }
    } else res.send({ message: `WelfareStand was deleted successfully!` });
  });
};

// Delete all WelfareStands from the database.
exports.deleteAll = (req, res) => {
  WelfareStand.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all welfarestands."
      });
    else res.send({ message: `All WelfareStands were deleted successfully!` });
  });
};
