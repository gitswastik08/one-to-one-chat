var express = require("express");
var router = express.Router();

const User = require("../models/usermodel");
const passport = require("passport");

const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(User.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("register", { title: "Express" });
});

router.post("/register", async function (req, res, next) {
  try {
    await User.register(
      { username: req.body.username, email: req.body.email },
      req.body.password
    );
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

router.post(
  "/login",
  passport.authenticate("local", {
      successRedirect: "/chatbox",
      failureRedirect: "/login",
  }),
  function (req, res, next) {}
);

router.get("/chatbox", function (req, res, next) {
  res.render("chatbox", { title: "Express" });
});

module.exports = router;
