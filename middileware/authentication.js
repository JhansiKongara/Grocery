let jwt = require("jsonwebtoken");
require("dotenv").config();
authentication = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    let tokenmodified = token.replace("Bearer ", "");
    //   console.log(token);
    jwt.verify(tokenmodified, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(400).json({
          Error: err,
        });
      } else {
        res.locals.authorizerId = decoded.data;
        next();
      }
    });
  } else {
    res.status(400).json({
      Error: "Unauthorized User",
    });
  }
};
module.exports = authentication;
