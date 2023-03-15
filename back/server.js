const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/action.routes.js")(app);
require("./app/routes/candidate.routes.js")(app);
require("./app/routes/protokoll.routes.js")(app);
require("./app/routes/errorlog.routes.js")(app);
require("./app/routes/loanunit.routes.js")(app);
require("./app/routes/shareunit.routes.js")(app);
require("./app/routes/rfid.routes.js")(app);
require("./app/routes/token.routes.js")(app);
require("./app/routes/unknownrfid.routes.js")(app);
require("./app/routes/welfarestand.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
