let express = require("express");
let bodyParser = require("body-parser");
require("./dbConnection/db");
require("dotenv").config();
let app = express();
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());
let AuthRoute = require("./routers/authRouter");
const PORT = process.env.PORT || 4000;
app.use(express.static(__dirname + "/dista/grocery/"));
app.use("/api", AuthRoute);
app.listen(PORT, () => {
  console.log("server Running on Port Number: " + PORT);
});
