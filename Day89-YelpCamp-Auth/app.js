// Imports
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");

// Passport
const passport = require('passport');
const LocalStrategy = require('passport-local');

// Flash
const flash = require('connect-flash');

// Import routes
const campgroundsRoutes = require("./routes/campgrounds");
const reviewsRoutes = require("./routes/reviews");
const userRoutes = require('./routes/users');

// EJS mate
const ejsMate = require("ejs-mate");

// Import Method override (for patch, put, delete requests)
var methodOverride = require("method-override");

// Models
const Campground = require("./models/campground");
const Review = require("./models/review");
const User = require('./models/user')

// ExpressError
const ExpressError = require("./helpers/ExpressError");

// Connect mongoose
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Check if connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

// Init express
const app = express();

// Use ejs mate as engine
app.engine("ejs", ejsMate);

// Set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MIDDLEWARES
// Body parser
app.use(express.urlencoded({ extended: true }));
// Method override
app.use(methodOverride("_method"));


// Serve static assets
app.use(express.static(path.join(__dirname, "public")));

// Session
const sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // Expires in a week
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));

// Flash
app.use(flash());
// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to ->
app.use((req, res, next) => {
  // get info about signed in user
  res.locals.currentUser = req.user;
  // access flash msg 
  res.locals.success = req.flash("success");
  res.locals.error = req.flash('error');
  next();
});
// (possibly on every route!)

// Router middleware
app.use("/campgrounds", campgroundsRoutes);
app.use("/campgrounds/:id/reviews", reviewsRoutes);
app.use("/", userRoutes);

// ROUTES
// Home
app.get("/", (req, res) => {
  res.render("home");
});

// In case route that doesn't exist is hit
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong";
  res.status(statusCode).render("error", { err });
  // res.send("Something went wrong");
});

// Listen on port 3000
app.listen(3000, () => console.log("APP RUNNING ON PORT 3000"));
