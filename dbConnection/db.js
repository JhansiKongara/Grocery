const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DB_NAME, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log("no connection");
  });
