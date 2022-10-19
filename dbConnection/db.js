const mongoose = require("mongoose");
const config = require("config");
mongoose
  .connect(config.get("Customer.dbConfig.db_url"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log("no connection", err);
  });
