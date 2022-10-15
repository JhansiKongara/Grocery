const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(
    "mongodb+srv://Jhansi9999:Jhansi2106@grocery.63xcih1.mongodb.net/grocery",
    {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log("no connection", err);
  });
