const Candidate = require("../models/candidate.model.js");

// Create and Save a new Candidate
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Candidate
  const candidate = new Candidate({
    name: req.body.name,
    hidden: req.body.hidden,
    inactive: req.body.inactive,
    mode: req.body.mode,
    phone: req.body.phone,
    address: req.body.address,
    bankdetails: req.body.bankdetails,
    email: req.body.email,
    password: req.body.password || false
  });

  // Save Candidate in the database
  Candidate.create(candidate, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Candidate."
      });
    else res.send(data);
  });
};

// Retrieve all Candidates from the database (with condition).
exports.findAll = (req, res) => {
  const name = req.query.name;

  Candidate.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving candidates."
      });
    else res.send(data);
  });
};

// Find a single Candidate by Id
exports.findOne = (req, res) => {
  Candidate.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Candidate with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Candidate with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Candidates
exports.findAllPublished = (req, res) => {
  Candidate.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving candidates."
      });
    else res.send(data);
  });
};

// Update a Candidate identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Candidate.updateById(
    req.params.id,
    new Candidate(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Candidate with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Candidate with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Candidate with the specified id in the request
exports.delete = (req, res) => {
  Candidate.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Candidate with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Candidate with id " + req.params.id
        });
      }
    } else res.send({ message: `Candidate was deleted successfully!` });
  });
};

// Delete all Candidates from the database.
exports.deleteAll = (req, res) => {
  Candidate.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all candidates."
      });
    else res.send({ message: `All Candidates were deleted successfully!` });
  });
};
