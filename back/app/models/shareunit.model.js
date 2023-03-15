const sql = require("./db.js");

// constructor
const ShareUnit = function(shareunit) {
  this.timestamp = shareunit.timestamp;
  this.preis = shareunit.preis;
};

ShareUnit.create = (newShareUnit, result) => {
  sql.query("INSERT INTO shareunit SET ?", newShareUnit, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created shareunit: ", { id: res.insertId, ...newShareUnit });
    result(null, { id: res.insertId, ...newShareUnit });
  });
};

ShareUnit.findById = (id, result) => {
  sql.query(`SELECT * FROM shareunit WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found shareunit: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found ShareUnit with the id
    result({ kind: "not_found" }, null);
  });
};

ShareUnit.getAll = (timestamp, result) => {
  let query = "SELECT * FROM shareunit";

  if (timestamp) {
    query += ` WHERE timestamp RLIKE '(${timestamp})'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("shareunit: ", res);
    result(null, res);
  });
};

//getAllPublished => 
ShareUnit.getAllPublished = result => {
  sql.query("SELECT * FROM shareunit WHERE preis >= 150000", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("shareunits: ", res);
    result(null, res);
  });
};

ShareUnit.updateById = (id, shareunit, result) => {
  sql.query(
    "UPDATE shareunit SET timestamp = ?, preis = ? WHERE id = ?",
    [shareunit.timestamp, shareunit.preis, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found ShareUnit with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated shareunit: ", { id: id, ...shareunit });
      result(null, { id: id, ...shareunit });
    }
  );
};

ShareUnit.remove = (id, result) => {
  sql.query("DELETE FROM shareunit WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found ShareUnit with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted shareunit with id: ", id);
    result(null, res);
  });
};

ShareUnit.removeAll = result => {
  sql.query("DELETE FROM shareunit", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} shareunit`);
    result(null, res);
  });
};

module.exports = ShareUnit;
