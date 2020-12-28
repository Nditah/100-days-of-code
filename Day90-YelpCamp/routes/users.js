const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require("../helpers/catchAsync");
const User = require("../models/user");
// Users controllers
const users = require("../controllers/users");

router
  .route("/register")
  // Register
  .get(users.renderRegister)
  // Post request to register user
  .post(catchAsync(users.register));

router
  .route("/login")
  // Login
  .get(users.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    users.login
  );

router.get("/logout", users.logout);

module.exports = router;
