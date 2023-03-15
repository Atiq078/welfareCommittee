const sql = require("./db.js");

// constructor
const UnknownRfid = function(unknownrfid) {
  this.timestamp = unknownrfid.timestamp;
  this.rfid = unknownrfid.rfid;
};

UnknownRfid.create = (newUnknownRfid, result) => {
  sql.query("INSERT INTO unknownrfid SET ?", newUnknownRfid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created unknownrfid: ", { rfid: res.insertId, ...newUnknownRfid });
    result(null, { rfid: res.insertId, ...newUnknownRfid });
  });
};

UnknownRfid.findById = (rfid, result) => {
  sql.query(`SELECT * FROM unknownrfid WHERE rfid = ${rfid}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found unknownrfid: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found UnknownRfid with the rfid
    result({ kind: "not_found" }, null);
  });
};

UnknownRfid.getAll = (timestamp, result) => {
  let query = "SELECT * FROM unknownrfid";

  if (timestamp) {
    query += ` WHERE timestamp RLIKE '(${timestamp})'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("unknownrfid: ", res);
    result(null, res);
  });
};

//getAllPublished => 
UnknownRfid.getAllPublished = result => {
  sql.query("SELECT * FROM unknownrfid WHERE timestamp RLIKE '(2023)'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("unknownrfids: ", res);
    result(null, res);
  });
};

UnknownRfid.updateById = (rfid, unknownrfid, result) => {
  sql.query(
    "UPDATE unknownrfid SET timestamp = ?, rfid = ? WHERE rfid = ?",
    [unknownrfid.timestamp, unknownrfid.rfid, rfid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found UnknownRfid with the rfid
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated unknownrfid: ", { rfid: rfid, ...unknownrfid });
      result(null, { rfid: rfid, ...unknownrfid });
    }
  );
};

UnknownRfid.remove = (rfid, result) => {
  sql.query("DELETE FROM unknownrfid WHERE rfid = ?", rfid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found UnknownRfid with the rfid
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted unknownrfid with rfid: ", rfid);
    result(null, res);
  });
};

UnknownRfid.removeAll = result => {
  sql.query("DELETE FROM unknownrfid", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} unknownrfid`);
    result(null, res);
  });
};

module.exports = UnknownRfid;
