const Protokoll = require("../models/protokoll.model.js");

// Create and Save a new Protokoll
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Protokoll
  const protokoll = new Protokoll({
    userid: req.body.userid,
    timestamp: req.body.timestamp,
    value: req.body.value,
    kommentar: req.body.kommentar,
    actionid: req.body.actionid ,
    cid: req.body.cid,
    approved: req.body.approved || false
  });

  // Save Protokoll in the database
  Protokoll.create(protokoll, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Protokoll."
      });
    else res.send(data);
  });
};

// Retrieve all Protokolls from the database (with condition).
exports.findAll = (req, res) => {
  const userid = req.query.userid;

  Protokoll.getAll(userid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving protokolls."
      });
    else res.send(data);
  });
};

// Find a single Protokoll by Id
exports.findOne = (req, res) => {
  Protokoll.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Protokoll with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Protokoll with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Protokolls
exports.findAllPublished = (req, res) => {
  Protokoll.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving protokolls."
      });
    else res.send(data);
  });
};

// Update a Protokoll identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Protokoll.updateById(
    req.params.id,
    new Protokoll(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Protokoll with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Protokoll with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Protokoll with the specified id in the request
exports.delete = (req, res) => {
  Protokoll.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Protokoll with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Protokoll with id " + req.params.id
        });
      }
    } else res.send({ message: `Protokoll was deleted successfully!` });
  });
};

// Delete all Protokolls from the database.
exports.deleteAll = (req, res) => {
  Protokoll.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all protokolls."
      });
    else res.send({ message: `All Protokolls were deleted successfully!` });
  });
};
