const myCont = require("../models/misc.model.js");


// Find a single mySqlLoanLeft by Id
exports.findOne = (req, res) => {
  myCont.findLoanLeftById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found mySqlLoanLeft with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving mySqlLoanLeft with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
// Find a single mySqlLoanLeft by Id
exports.findLoanLeft = (req, res) => {
    const id = req.query.id;
    const cid = req.query.cid;
    myCont.findLoanLeftByIdandCid(id,cid, (err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving mySqlLoanLeft."
        });
      else res.send(data);
    });
  };

  exports.findLastLoan = (req, res) => {
    const id = req.query.id;
    const cid = req.query.cid;
    myCont.findLastLoanByIdandCid(id,cid, (err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving mySqlLoanLeft."
        });
      else res.send(data);
    });
  };

  exports.findLastLoanId = (req, res) => {
    const id = req.params.id;
    myCont.findLastLoanById(id, (err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving mySqlLoanLeft."
        });
      else res.send(data);
    });
  };

  exports.findMaxInst = (req, res) => {
    myCont.findMaxInstByCid(req.params.cid, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found mySqlLoanLeft with id ${req.params.cid}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving mySqlLoanLeft with id " + req.params.cid
          });
        }
      } else res.send(data);
    });
  };


  exports.findMaxLoan = (req, res) => {
    myCont.findMaxLoanByCid(req.params.cid, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found mySqlLoanLeft with id ${req.params.cid}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving mySqlLoanLeft with id " + req.params.cid
          });
        }
      } else res.send(data);
    });
  };

  exports.findLoanDuration = (req, res) => {
    const id = req.query.id;
    const cid = req.query.cid;
    myCont.findLoanDurationByIdandCid(id,cid, (err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving mySqlLoanLeft."
        });
      else res.send(data);
    });
  };

  exports.findInstPaid = (req, res) => {
    const id = req.query.id;
    const cid = req.query.cid;
    myCont.findInstPaidByIdandCid(id,cid, (err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving mySqlLoanLeft."
        });
      else res.send(data);
    });
  };

  exports.findDueMonths = (req, res) => {
    const id = req.query.id;
    const cid = req.query.cid;
    myCont.findDueMonthsByIdandCid(id,cid, (err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving mySqlLoanLeft."
        });
      else res.send(data);
    });
  };
  
  
  exports.findMinInstAmount = (req, res) => {
    const id = req.query.id;
    const cid = req.query.cid;
    myCont.findMinInstAmountByIdandCid(id,cid, (err, data) => {
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving mySqlLoanLeft."
        });
      else res.send(data);
    });
  };

    
  
exports.findTotalBal = (req, res) => {
    myCont.findTotalBalByCid(req.params.cid, (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found mySqlLoanLeft with id ${req.params.cid}.`
            });
        } else {
            res.status(500).send({
            message: "Error retrieving mySqlLoanLeft with id " + req.params.cid
            });
        }
        } else res.send(data);
    });
    };

exports.findAllMonthlyDues = (req, res) => {
    myCont.findAllMonthlyDuesByCid(req.params.cid, (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found mySqlLoanLeft with id ${req.params.cid}.`
            });
        } else {
            res.status(500).send({
            message: "Error retrieving mySqlLoanLeft with id " + req.params.cid
            });
        }
        } else res.send(data);
    });
    };

    exports.findOverallBal = (req, res) => {
        myCont.findOverallBalByCid(req.params.cid, (err, data) => {
            if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found mySqlLoanLeft with id ${req.params.cid}.`
                });
            } else {
                res.status(500).send({
                message: "Error retrieving mySqlLoanLeft with id " + req.params.cid
                });
            }
            } else res.send(data);
        });
    };
        
    exports.findOverallLoan = (req, res) => {
        myCont.findOverallLoanByCid(req.params.cid, (err, data) => {
            if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found mySqlLoanLeft with id ${req.params.cid}.`
                });
            } else {
                res.status(500).send({
                message: "Error retrieving mySqlLoanLeft with id " + req.params.cid
                });
            }
            } else res.send(data);
        });
    };
        
    exports.findOverallLoanDues = (req, res) => {
        myCont.findOverallLoanDuesByCid(req.params.cid, (err, data) => {
            if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found mySqlLoanLeft with id ${req.params.cid}.`
                });
            } else {
                res.status(500).send({
                message: "Error retrieving mySqlLoanLeft with id " + req.params.cid
                });
            }
            } else res.send(data);
        });
    };
       
    exports.findMembersCount = (req, res) => {
      myCont.findMembersCount( (err, data) => {
          if (err) {
          if (err.kind === "not_found") {
              res.status(404).send({
              message: `Not found mySqlLoanLeft.`
              });
          } else {
              res.status(500).send({
              message: "Error retrieving mySqlLoanLeft "
              });
          }
          } else res.send(data);
      });
  };            