module.exports = app => {
  const myRoute = require("../controllers/misc.controller.js");

  var router = require("express").Router();


  //Individual
  router.get("/loanleft/:id", myRoute.findOne);
  router.get("/loanleft/", myRoute.findLoanLeft);
  router.get("/lastloan/", myRoute.findLastLoan);
  router.get("/lastloan/:id", myRoute.findLastLoanId);
  router.get("/maxinst/:cid", myRoute.findMaxInst);
  router.get("/maxloan/:cid", myRoute.findMaxLoan);
  router.get("/loanduration/", myRoute.findLoanDuration);
  router.get("/instpaid/", myRoute.findInstPaid);
  router.get("/duemonths/", myRoute.findDueMonths);
  router.get("/mininstamount/", myRoute.findMinInstAmount);
  //Admin
  router.get("/totalbal/:cid", myRoute.findTotalBal);
  router.get("/allmonthlydues/:cid", myRoute.findAllMonthlyDues);
  router.get("/overallbal/:cid", myRoute.findOverallBal);
  router.get("/overallloan/:cid", myRoute.findOverallLoan);
  router.get("/overallloandues/:cid", myRoute.findOverallLoanDues);
  router.get("/memberscount/", myRoute.findMembersCount);

  app.use('/api/sql', router);
};
