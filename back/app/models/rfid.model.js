const sql = require("./db.js");

// constructor
const Rfid = function(rfid) {
  this.userid = rfid.userid;
  this.rfid = rfid.rfid;
  this.email = rfid.email;
  this.pwd = rfid.pwd;
};

Rfid.create = (newRfid, result) => {
  sql.query("INSERT INTO rfid SET ?", newRfid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created rfid: ", { userid: res.insertId, ...newRfid });
    result(null, { userid: res.insertId, ...newRfid });
  });
};

Rfid.findById = (userid, result) => {
  sql.query(`SELECT * FROM rfid WHERE userid = ${userid}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found rfid: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Rfid with the userid
    result({ kind: "not_found" }, null);
  });
};

Rfid.getAll = (rfid, result) => {
  let query = "SELECT * FROM rfid";

  if (rfid) {
    query += ` WHERE rfid RLIKE '(${rfid})'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("rfid: ", res);
    result(null, res);
  });
};

//getAllPublished => emails
Rfid.getAllPublished = result => {
  sql.query("SELECT * FROM rfid WHERE email RLIKE '(admin)'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("rfids: ", res);
    result(null, res);
  });
};

Rfid.updateById = (userid, rfid, result) => {
  sql.query(
    "UPDATE rfid SET userid = ?, rfid = ?, email = ?, pwd = ? WHERE userid = ?",
    [rfid.userid,rfid.rfid,rfid.email, rfid.pwd, userid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Rfid with the userid
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated rfid: ", { userid: userid, ...rfid });
      result(null, { userid: userid, ...rfid });
    }
  );
};

Rfid.remove = (userid, result) => {
  sql.query("DELETE FROM rfid WHERE userid = ?", userid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Rfid with the userid
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted rfid with userid: ", userid);
    result(null, res);
  });
};

Rfid.removeAll = result => {
  sql.query("DELETE FROM rfid", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} rfid`);
    result(null, res);
  });
};

module.exports = Rfid;
