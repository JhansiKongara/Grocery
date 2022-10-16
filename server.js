let express = require("express");
let path = require("path");
const config = require("config");
let bodyParser = require("body-parser");
require("./dbConnection/db");
require("dotenv").config();
let app = express();
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());
let AuthRoute = require("./routers/authRouter");
const PORT = process.env.PORT || 4000;
console.log(__dirname);
app.use(express.static(path.join(__dirname + "/dist/grocery/")));
app.use("/api", AuthRoute);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/grocery/index.html"));
});
app.listen(PORT, () => {
  console.log("server Running on Port Number: " + PORT);
});
