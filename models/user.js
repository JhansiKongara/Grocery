let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    UserId: {
      type: String,
      unique: true,
    },
    Mobile: {
      type: Number,
      unique: true,
    },
    Password: {
      type: String,
    },
    profilePic: {
      type: String,
    },
  },
  { timestamps: true }
);
let user = mongoose.model("User", userSchema);
module.exports = user;
