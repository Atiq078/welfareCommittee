const myModel = require("./db.js");

myModel.findLoanLeftById = (id, result) => {
  myModel.query(`SELECT SUM(value)*(1000) as loan_left FROM protokoll  WHERE (userid=${id} and cid=1 and (actionid=3 or actionid=5))`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found sqlLoanLeft: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found SqlLoanLeft with the id
    result({ kind: "not_found" }, null);
  });
};


myModel.findLoanLeftByIdandCid = (id, cid, result) => {
  let query = `SELECT SUM(value)*(1000) as "loan_left" FROM protokoll  WHERE (userid=${id} and cid=${cid} and (actionid=3 or actionid=5))`;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlLoanLeft: ", res[0]);
    result(null, res[0]);
  });
};

myModel.findLastLoanById = (id, result) => {
  //let query = `SELECT timestamp, value*1000 as loan, kommentar FROM protokoll  WHERE (actionid=5 and userid=${id} and cid=${cid}) ORDER BY id DESC LIMIT 1`;
  let query = `SELECT * FROM protokoll  WHERE (actionid=5 and userid=${id} and cid=1) ORDER BY id DESC LIMIT 1`;
  
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlLastLoan: ", res[0]);
    result(null, res[0]);
  });
};

myModel.findLastLoanByIdandCid = (id, cid, result) => {
  let query = `SELECT timestamp, value*1000 as loan, kommentar FROM protokoll  WHERE (actionid=5 and userid=${id} and cid=${cid}) ORDER BY id DESC LIMIT 1`;
  //let query = `SELECT * FROM protokoll  WHERE (actionid=5 and userid=${id} and cid=${cid}) ORDER BY id DESC LIMIT 1`;
  
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlLastLoan: ", res[0]);
    result(null, res[0]);
  });
};

myModel.findMaxInstByCid = (cid, result) => {
  myModel.query(`SELECT maxinst FROM loanunit WHERE cid=${cid} ORDER BY id DESC LIMIT 1`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found sqlMaxInst: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found SqlLoanLeft with the id
    result({ kind: "not_found" }, null);
  });
};

myModel.findMaxLoanByCid = (cid, result) => {
  myModel.query(`SELECT preis*1000 as "loan", maxinst FROM loanunit WHERE cid=${cid} ORDER BY id DESC LIMIT 1`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found sqlMaxLoan: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found SqlLoanLeft with the id
    result({ kind: "not_found" }, null);
  });
};


myModel.findLoanDurationByIdandCid = (id, cid, result) => {
  let query = `SELECT DATE_FORMAT(DATE_ADD(timestamp, INTERVAL 1 MONTH),'%b-%Y') as loan_start, DATE_FORMAT(DATE_ADD(timestamp, INTERVAL (SELECT maxinst FROM loanunit WHERE cid=${cid} ORDER BY id DESC LIMIT 1) MONTH),'%b-%Y') as loan_end FROM protokoll WHERE (actionid=5 and userid=${id}) ORDER BY id  DESC LIMIT 1`;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlLoanDuration: ", res[0]);
    result(null, res[0]);
  });
};

myModel.findInstPaidByIdandCid = (id, cid, result) => {
  let query = `SELECT id, timestamp, value*1000 as installment, kommentar FROM protokoll  WHERE (cid=${cid} and actionid=3 and userid=${id} and (timestamp > (SELECT timestamp FROM protokoll  WHERE (cid=${cid} and actionid=5 and userid=${id}) ORDER BY id DESC LIMIT 1)))`;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlInstPaid: ", res);
    result(null, res);
  });
};

;


myModel.findDueMonthsByIdandCid = (id, cid, result) => {
  let query = `SELECT ((SELECT ((TIMESTAMPDIFF (month, timestamp, NOW())+1))*preis FROM shareunit WHERE cid=${cid} ORDER BY id DESC LIMIT 1)-(SELECT SUM(value) FROM protokoll  WHERE userid=${id} and actionid=2 and cid=${cid}))/5 as due_months`;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlDueMonths: ", res[0]);
    result(null, res[0]);
  });
};



myModel.findMinInstAmountByIdandCid = (id, cid, result) => {
  let query = `SELECT
  (SELECT value FROM protokoll  WHERE (actionid=5 and userid=${id} and cid=${cid}) ORDER BY id DESC LIMIT 1) * (-1000)
  /
  (SELECT maxinst FROM loanunit WHERE cid=${cid} ORDER BY id DESC LIMIT 1) as min_instal`;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlMinInstAmount: ", res[0]);
    result(null, res[0]);
  });
};
//Admin
myModel.findTotalBalByCid = (cid, result) => {
  let query = `SELECT SUM(value)*1000 as "total_bal" FROM protokoll WHERE cid=${cid}`;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlTotalBal: ", res[0]);
    result(null, res[0]);
  });
};


myModel.findAllMonthlyDuesByCid = (cid, result) => {
  let query = `SELECT candidate.id, candidate.name, (SUM(protokoll.value)-((SELECT ((TIMESTAMPDIFF (month, timestamp, NOW())+1))*preis FROM shareunit WHERE cid=${cid} ORDER BY id DESC LIMIT 1)))*1000 as "current_dues"
  FROM candidate
  JOIN protokoll  ON protokoll.userid  = candidate.id
  JOIN action  ON protokoll.actionid  = action.id
  WHERE (actionid=2 and inactive='no' and hidden = 'no') 
  GROUP BY userid;
  `;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlAllMonthlyDues: ", res);
    result(null, res);
  });
};



myModel.findOverallBalByCid = (cid, result) => {
  let query = `SELECT candidate.id, candidate.name, SUM(protokoll.value)*1000 as "total_bal", protokoll.kommentar
  FROM candidate
  JOIN protokoll  ON protokoll.userid  = candidate.id
  JOIN action  ON protokoll.actionid  = action.id
  WHERE protokoll.cid=${cid}
  GROUP BY protokoll.userid
  `;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlOverallBal: ", res);
    result(null, res);
  });
};

myModel.findOverallLoanByCid = (cid, result) => {
  let query = `SELECT candidate.id, candidate.name, SUM(protokoll.value)*1000 as "total_loan", protokoll.kommentar, action.description
  FROM candidate
  JOIN protokoll  ON protokoll.userid  = candidate.id
  JOIN action  ON protokoll.actionid  = action.id
  WHERE (actionid=5 and protokoll.cid=${cid})
  GROUP BY userid;
  `;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlOverallLoan: ", res);
    result(null, res);
  });
};

myModel.findOverallLoanDuesByCid = (cid, result) => {
  let query = `SELECT candidate.id,  candidate.name, SUM(protokoll.value)*1000 as "total_loan_left", protokoll.kommentar
  FROM candidate
  JOIN protokoll  ON protokoll.userid  = candidate.id
  JOIN action  ON protokoll.actionid  = action.id
  WHERE ((actionid=5 or actionid=3) and cid=${cid})
  GROUP BY userid
  `;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlOverallLoanDues: ", res);
    result(null, res);
  });
};

myModel.findMembersCount = ( result) => {
  let query = `
  SELECT
  (SELECT COUNT(id) FROM candidate WHERE (inactive='no' and hidden = 'no'))  as active_members,
  (SELECT COUNT(id) FROM candidate WHERE (inactive='yes' and hidden = 'no'))  as inactive_members
  `;
  myModel.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sqlMembersCount: ", res);
    result(null, res);
  });
};

module.exports = myModel;
