let express = require("express");
let route = express.Router();
let authentication = require("../middileware/authentication");
let authController = require("../controllers/authController");
route.post("/register", authController.register);
route.post("/login", authController.login);
route.get("/getuser", authentication, authController.getUser);
module.exports = route;
