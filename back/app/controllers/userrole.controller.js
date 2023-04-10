const UserRole = require("../models/userrole.model.js");

// Create and Save a new UserRole
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a UserRole
  const userrole = new UserRole({
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
    roleId: req.body.roleId,
    userId: req.body.userId  || false
  });

  // Save UserRole in the database
  UserRole.create(userrole, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UserRole."
      });
    else res.send(data);
  });
};

// Find a single UserRole by Id
exports.findOne = (req, res) => {
  UserRole.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found UserRole with userId ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving UserRole with iuserIdd " + req.params.userId
        });
      }
    } else res.send(data);
  });
};


// Update a UserRole identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  UserRole.updateById(
    req.params.userId,
    new UserRole(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found UserRole with userId ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating UserRole with userId " + req.params.userId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a UserRole with the specified id in the request
exports.delete = (req, res) => {
  UserRole.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found UserRole with userId ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete UserRole with userId " + req.params.userId
        });
      }
    } else res.send({ message: `UserRole was deleted successfully!` });
  });
};

// Delete all UserRoles from the database.
exports.deleteAll = (req, res) => {
  UserRole.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all userroles."
      });
    else res.send({ message: `All UserRoles were deleted successfully!` });
  });
};
