const express = require("express");
const app = express();
const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");

mongoose
  .connect("mongodb://localhost:27017/authdemo", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongo connection open"))
  .catch((err) => {
    console.log("Mongo error");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret" }));

const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// Register (post req)
app.post("/register", async (req, res) => {
  const { password, username } = req.body;
  //   Hash
  //   const hash = await bcrypt.hash(password, 12);
  const user = new User({ username, password });
  await user.save();
  //   Login once registation is complete
  req.session.user_id = user._id;
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findAndValidate(username, password);
  if (foundUser) {
    //   Login successfull
    req.session.user_id = foundUser._id;
    res.redirect("/secret");
  } else {
    //   Login unsuccessfull
    res.redirect("/login");
  }
});

// Logout
app.post("/logout", (req, res) => {
  req.session.user_id = null;
  //   req.session.destroy();
  res.redirect("/login");
});

// Secret page (shown only if logged in)
app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});

app.listen(3000, () => console.log("Listening on port 3000"));
