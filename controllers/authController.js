let user = require("../models/user");
const config = require("config");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

let register = (req, res, next) => {
  bcrypt.hash(req.body.Password, 10, (err, hashPassword) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      let userdata = req.body;
      userdata.Password = hashPassword;
      user.create(userdata, (err, saveddata) => {
        if (err) {
          res.status(400).json({
            Error: Object.keys(err.keyValue)[0] + " Alredy Existed",
          });
        } else {
          res.json({ Message: "User Registered Successfully" });
        }
      });
    }
  });
};

let login = (req, res, next) => {
  user.findOne(
    {
      $or: [{ UserId: req.body.UserId }, { Mobile: req.body.Mobile }],
    },
    (err, user) => {
      if (err) {
        res.status(400).json({ Error: "user Not Existed" });
      } else {
        bcrypt
          .compare(req.body.Password, user.Password)
          .then((valid) => {
            if (valid) {
              let token = jwt.sign(
                { data: user._id },
                config.get("Customer.credit.jwt_secreat"),
                {
                  expiresIn: "1h",
                }
              );
              res.json({
                message: "Logged Successfuly",
                token,
                data: { UserId: user.UserId, Mobile: user.Mobile },
              });
            } else {
              res.status(400).json({ Error: "Password Incorrect" });
            }
          })
          .catch((err) => {
            res.status(400).json({
              Error: "Invalid Password",
            });
          });
      }
    }
  );
};

getUser = (req, res) => {
  user.findById(res.locals.authorizerId, (err, userdata) => {
    if (err) {
      res.status(400).json({
        Error: "User Details Not Available",
      });
    } else {
      let userData = {};
      userData._id = userdata?._id;
      userData.UserId = userdata.UserId;
      userData.Mobile = userdata.Mobile;
      userData.createdAt = userdata.createdAt;
      userData.updatedAt = userdata.updatedAt;
      res.json(userData);
    }
  });
};
module.exports = {
  register,
  login,
  getUser,
};
