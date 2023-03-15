const sql = require("./db.js");

// constructor
const ErrorLog = function(errorlog) {
  this.lastuserid = errorlog.lastuserid;
  this.timestamp = errorlog.timestamp;
  this.message = errorlog.message;
  this.protokollid = errorlog.protokollid;
};

ErrorLog.create = (newCandidate, result) => {
  sql.query("INSERT INTO errorlog SET ?", newCandidate, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created errorlog: ", { lastuserid: res.insertId, ...newCandidate });
    result(null, { lastuserid: res.insertId, ...newCandidate });
  });
};

ErrorLog.findById = (lastuserid, result) => {
  sql.query(`SELECT * FROM errorlog WHERE lastuserid = ${lastuserid}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found errorlog: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found ErrorLog with the lastuserid
    result({ kind: "not_found" }, null);
  });
};

ErrorLog.getAll = (message, result) => {
  let query = "SELECT * FROM errorlog";

  if (message) {
    //query += ` WHERE lastuserid LIKE '%${lastuserid}%'`;
	console.log("message: ", message);
	query += ` WHERE message RLIKE '(${message})'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("errorlog: ", res);
    result(null, res);
  });
};

//getAllPublished => 
ErrorLog.getAllPublished = result => {
  sql.query("SELECT * FROM errorlog WHERE message RLIKE('admin')", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("errorlogs: ", res);
    result(null, res);
  });
};
	
ErrorLog.updateById = (lastuserid, errorlog, result) => {
  sql.query(
    "UPDATE errorlog SET lastuserid = ?, timestamp = ?, message = ?, protokollid = ? WHERE lastuserid = ?",
    [errorlog.lastuserid, errorlog.timestamp, errorlog.message,errorlog.protokollid, lastuserid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found ErrorLog with the lastuserid
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated errorlog: ", { lastuserid: lastuserid, ...errorlog });
      result(null, { lastuserid: lastuserid, ...errorlog });
    }
  );
};

ErrorLog.remove = (lastuserid, result) => {
  sql.query("DELETE FROM errorlog WHERE lastuserid = ?", lastuserid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found ErrorLog with the lastuserid
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted errorlog with lastuserid: ", lastuserid);
    result(null, res);
  });
};

ErrorLog.removeAll = result => {
  sql.query("DELETE FROM errorlog", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} errorlog`);
    result(null, res);
  });
};

module.exports = ErrorLog;
