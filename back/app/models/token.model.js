const sql = require("./db.js");

// constructor
const Token = function(token) {
  this.token = token.token;
  this.userid = token.userid;
};

Token.create = (newToken, result) => {
  sql.query("INSERT INTO token SET ?", newToken, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created token: ", { userid: res.insertId, ...newToken });
    result(null, { userid: res.insertId, ...newToken });
  });
};

Token.findById = (userid, result) => {
  sql.query(`SELECT * FROM token WHERE userid = ${userid}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found token: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Token with the userid
    result({ kind: "not_found" }, null);
  });
};

Token.getAll = (token, result) => {
  let query = "SELECT * FROM token";

  if (token) {
    query += ` WHERE token RLIKE '(${token})'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("token: ", res);
    result(null, res);
  });
};

//getAllPublished => 
Token.getAllPublished = result => {
  sql.query("SELECT * FROM token WHERE token RLIKE '(COFFE)'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tokens: ", res);
    result(null, res);
  });
};

Token.updateById = (userid, token, result) => {
  sql.query(
    "UPDATE token SET token = ?, userid = ? WHERE userid = ?",
    [token.token, token.userid, userid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Token with the userid
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated token: ", { userid: userid, ...token });
      result(null, { userid: userid, ...token });
    }
  );
};

Token.remove = (userid, result) => {
  sql.query("DELETE FROM token WHERE userid = ?", userid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Token with the userid
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted token with userid: ", userid);
    result(null, res);
  });
};

Token.removeAll = result => {
  sql.query("DELETE FROM token", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} token`);
    result(null, res);
  });
};

module.exports = Token;
