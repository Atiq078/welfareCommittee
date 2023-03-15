const sql = require("./db.js");

// constructor
const LoanUnit = function(loanunit) {
  this.timestamp = loanunit.timestamp;
  this.preis = loanunit.preis;
};

LoanUnit.create = (newLoanUnit, result) => {
  sql.query("INSERT INTO loanunit SET ?", newLoanUnit, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created loanunit: ", { id: res.insertId, ...newLoanUnit });
    result(null, { id: res.insertId, ...newLoanUnit });
  });
};

LoanUnit.findById = (id, result) => {
  sql.query(`SELECT * FROM loanunit WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found loanunit: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found LoanUnit with the id
    result({ kind: "not_found" }, null);
  });
};

LoanUnit.getAll = (timestamp, result) => {
  let query = "SELECT * FROM loanunit";

  if (timestamp) {
    query += ` WHERE timestamp RLIKE '(${timestamp})'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("loanunit: ", res);
    result(null, res);
  });
};

//getAllPublished => 
LoanUnit.getAllPublished = result => {
  sql.query("SELECT * FROM loanunit WHERE preis >= 150000", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("loanunits: ", res);
    result(null, res);
  });
};

LoanUnit.updateById = (id, loanunit, result) => {
  sql.query(
    "UPDATE loanunit SET timestamp = ?, preis = ? WHERE id = ?",
    [loanunit.timestamp, loanunit.preis, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found LoanUnit with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated loanunit: ", { id: id, ...loanunit });
      result(null, { id: id, ...loanunit });
    }
  );
};

LoanUnit.remove = (id, result) => {
  sql.query("DELETE FROM loanunit WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found LoanUnit with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted loanunit with id: ", id);
    result(null, res);
  });
};

LoanUnit.removeAll = result => {
  sql.query("DELETE FROM loanunit", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} loanunit`);
    result(null, res);
  });
};

module.exports = LoanUnit;
