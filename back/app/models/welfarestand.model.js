const sql = require("./db.js");

// constructor
const WelfareStand = function(welfarestand) {
  this.timestamp = welfarestand.timestamp;
  this.wert = welfarestand.wert;
};

WelfareStand.create = (newWelfareStand, result) => {
  sql.query("INSERT INTO welfarestand SET ?", newWelfareStand, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created welfarestand: ", { wert: res.insertId, ...newWelfareStand });
    result(null, { wert: res.insertId, ...newWelfareStand });
  });
};

WelfareStand.findById = (wert, result) => {
  sql.query(`SELECT * FROM welfarestand WHERE wert = ${wert}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found welfarestand: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found WelfareStand with the wert
    result({ kind: "not_found" }, null);
  });
};

WelfareStand.getAll = (timestamp, result) => {
  let query = "SELECT * FROM welfarestand";

  if (timestamp) {
    query += ` WHERE timestamp RLIKE '(${timestamp})'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("welfarestand: ", res);
    result(null, res);
  });
};

//getAllPublished => 
WelfareStand.getAllPublished = result => {
  sql.query("SELECT * FROM welfarestand WHERE timestamp RLIKE '(2023)'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("welfarestands: ", res);
    result(null, res);
  });
};

WelfareStand.updateById = (wert, welfarestand, result) => {
  sql.query(
    "UPDATE welfarestand SET timestamp = ?, wert = ? WHERE wert = ?",
    [welfarestand.timestamp, welfarestand.wert, wert],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found WelfareStand with the wert
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated welfarestand: ", { wert: wert, ...welfarestand });
      result(null, { wert: wert, ...welfarestand });
    }
  );
};

WelfareStand.remove = (wert, result) => {
  sql.query("DELETE FROM welfarestand WHERE wert = ?", wert, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found WelfareStand with the wert
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted welfarestand with wert: ", wert);
    result(null, res);
  });
};

WelfareStand.removeAll = result => {
  sql.query("DELETE FROM welfarestand", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} welfarestand`);
    result(null, res);
  });
};

module.exports = WelfareStand;
