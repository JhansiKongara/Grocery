let jwt = require("jsonwebtoken");
const config = require("config");
authentication = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    let tokenmodified = token.replace("Bearer ", "");
    jwt.verify(
      tokenmodified,
      config.get("Customer.credit.jwt_secreat"),
      (err, decoded) => {
        if (err) {
          res.status(400).json({
            Error: err,
          });
        } else {
          res.locals.authorizerId = decoded.data;
          next();
        }
      }
    );
  } else {
    res.status(400).json({
      Error: "Unauthorized User",
    });
  }
};
module.exports = authentication;
