const Rfid = require("../models/rfid.model.js");

// Create and Save a new Rfid
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Rfid
  const rfid = new Rfid({
    userid: req.body.userid,
    rfid: req.body.rfid,
    email: req.body.email,
    pwd: req.body.pwd || false
  });

  // Save Rfid in the database
  Rfid.create(rfid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Rfid."
      });
    else res.send(data);
  });
};

// Retrieve all Rfids from the database (with condition).
exports.findAll = (req, res) => {
  const rfid = req.query.rfid;

  Rfid.getAll(rfid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rfids."
      });
    else res.send(data);
  });
};

// Find a single Rfid by Id
exports.findOne = (req, res) => {
  Rfid.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Rfid with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Rfid with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Rfids
exports.findAllPublished = (req, res) => {
  Rfid.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rfids."
      });
    else res.send(data);
  });
};

// Update a Rfid identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Rfid.updateById(
    req.params.id,
    new Rfid(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Rfid with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Rfid with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Rfid with the specified id in the request
exports.delete = (req, res) => {
  Rfid.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Rfid with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Rfid with id " + req.params.id
        });
      }
    } else res.send({ message: `Rfid was deleted successfully!` });
  });
};

// Delete all Rfids from the database.
exports.deleteAll = (req, res) => {
  Rfid.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all rfids."
      });
    else res.send({ message: `All Rfids were deleted successfully!` });
  });
};
