const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  AccessControlAllowOrigin: '*',
  //origin: "http://localhost:8081",
  //origin: "http://e4ba-2003-c9-7f32-3f00-c49a-9605-630-69ee.ngrok.io"
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

/////// login registeration /////////
// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });
/////// login registeration /////////

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/action.routes.js")(app);
require("./app/routes/candidate.routes.js")(app);
require("./app/routes/misc.routes.js")(app);
require("./app/routes/protokoll.routes.js")(app);
require("./app/routes/errorlog.routes.js")(app);
require("./app/routes/loanunit.routes.js")(app);
require("./app/routes/shareunit.routes.js")(app);
require("./app/routes/rfid.routes.js")(app);
require("./app/routes/token.routes.js")(app);
require("./app/routes/unknownrfid.routes.js")(app);
require("./app/routes/welfarestand.routes.js")(app);
//for modifications of user roles
require("./app/routes/userrole.routes.js")(app);
// routes
/////// login registeration /////////
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
/////// login registeration /////////

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/////// login registeration /////////
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
/////// login registeration /////////
