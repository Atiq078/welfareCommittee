const sql = require("./db.js");

// constructor
const UserRole = function(userrole) {
  this.createdAt = userrole.createdAt;
  this.updatedAt = userrole.updatedAt;
  this.roleId = userrole.roleId;
  this.userId = userrole.userId;
};

UserRole.findById = (userId, result) => {
  sql.query(`SELECT * FROM user_roles WHERE userId = ${userId}`, (err, res) => {
  //sql.query(`SELECT name,address,username FROM userrole WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found userrole: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found UserRole with the userId
    result({ kind: "not_found" }, null);
  });
};


UserRole.updateById = (userId, userrole, result) => {
  sql.query(
    "UPDATE user_roles SET updatedAt = ?, roleId = ? WHERE userId = ?",
    [userrole.updatedAt, userrole.roleId, userId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found UserRole with the userId
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated userrole: ", { userId: userId, ...userrole });
      result(null, { userId: userId, ...userrole });
    }
  );
};

UserRole.remove = (userId, result) => {
  sql.query("DELETE FROM user_roles WHERE userId = ?", userId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found UserRole with the userId
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted userrole with userId: ", userId);
    result(null, res);
  });
};

UserRole.removeAll = result => {
  sql.query("DELETE FROM user_roles", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} userrole`);
    result(null, res);
  });
};

module.exports = UserRole;
