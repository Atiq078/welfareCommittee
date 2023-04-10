const sql = require("./db.js");

// constructor
const Candidate = function(candidate) {
  this.name = candidate.name;
  this.hidden = candidate.hidden;
  this.inactive = candidate.inactive;
  this.mode = candidate.mode;
  this.phone = candidate.phone;
  this.address = candidate.address;
  this.bankdetails = candidate.bankdetails;
  this.email = candidate.email;
  this.password = candidate.password;
};

Candidate.create = (newCandidate, result) => {
  sql.query("INSERT INTO candidate SET ?", newCandidate, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created candidate: ", { id: res.insertId, ...newCandidate });
    result(null, { id: res.insertId, ...newCandidate });
  });
};

Candidate.findById = (id, result) => {
  sql.query(`SELECT * FROM candidate WHERE id = ${id}`, (err, res) => {
  //sql.query(`SELECT name,address,username FROM candidate WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found candidate: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Candidate with the id
    result({ kind: "not_found" }, null);
  });
};

Candidate.getAll = (name, result) => {
  let query = "SELECT * FROM candidate";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
    //query += ` WHERE name = '${name}'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("candidate: ", res);
    result(null, res);
  });
};

//getAllPublished => 
Candidate.getAllPublished = result => {
  sql.query("SELECT * FROM candidate WHERE mode='admin'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("candidates: ", res);
    result(null, res);
  });
};

Candidate.updateById = (id, candidate, result) => {
  sql.query(
    "UPDATE candidate SET name = ?, hidden = ?, inactive = ?, mode = ?, phone = ?, address = ?, bankdetails = ?, email = ?, password = ? WHERE id = ?",
    [candidate.name, candidate.hidden, candidate.inactive,candidate.mode,candidate.phone,candidate.address,candidate.bankdetails,candidate.email, candidate.password, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Candidate with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated candidate: ", { id: id, ...candidate });
      result(null, { id: id, ...candidate });
    }
  );
};

Candidate.remove = (id, result) => {
  sql.query("DELETE FROM candidate WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Candidate with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted candidate with id: ", id);
    result(null, res);
  });
};

Candidate.removeAll = result => {
  sql.query("DELETE FROM candidate", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} candidate`);
    result(null, res);
  });
};

module.exports = Candidate;
