const sql = require("./db.js");

// constructor
const Protokoll = function(protokoll) {
  this.userid = protokoll.userid;
  this.timestamp = protokoll.timestamp;
  this.value = protokoll.value;
  this.kommentar = protokoll.kommentar;
  this.actionid = protokoll.actionid;
  this.cid = protokoll.cid;
  this.approved = protokoll.approved;
};

Protokoll.create = (newProtokoll, result) => {
  sql.query("INSERT INTO protokoll SET ?", newProtokoll, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created protokoll: ", { id: res.insertId, ...newProtokoll });
    result(null, { id: res.insertId, ...newProtokoll });
  });
};

Protokoll.findById = (id, result) => {
  sql.query(`SELECT * FROM protokoll WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found protokoll: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Protokoll with the id
    result({ kind: "not_found" }, null);
  });
};

Protokoll.getAll = (userid, result) => {
  let query = "SELECT * FROM protokoll";

  if (userid) {
    query += ` WHERE userid LIKE '%${userid}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("protokoll: ", res);
    result(null, res);
  });
};

//getAllPublished => 
Protokoll.getAllPublished = result => {
  //sql.query("SELECT * FROM protokoll WHERE kommentar='regular loan'", (err, res) => {
    sql.query("SELECT * FROM protokoll WHERE kommentar RLIKE ('loan')", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("protokolls: ", res);
    result(null, res);
  });
};

Protokoll.updateById = (id, protokoll, result) => {
  sql.query(
    "UPDATE protokoll SET userid = ?, timestamp = ?, value = ?,  kommentar = ?, actionid = ?, cid = ?, approved = ? WHERE id = ?",
    [protokoll.userid, protokoll.timestamp, protokoll.value,protokoll.kommentar,protokoll.actionid, protokoll.approved, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Protokoll with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated protokoll: ", { id: id, ...protokoll });
      result(null, { id: id, ...protokoll });
    }
  );
};

Protokoll.remove = (id, result) => {
  sql.query("DELETE FROM protokoll WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Protokoll with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted protokoll with id: ", id);
    result(null, res);
  });
};

Protokoll.removeAll = result => {
  sql.query("DELETE FROM protokoll", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} protokoll`);
    result(null, res);
  });
};

module.exports = Protokoll;
